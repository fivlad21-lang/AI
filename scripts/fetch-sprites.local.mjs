#!/usr/bin/env node
/**
 * LOCAL ONLY — downloads fan sprites from PokeAPI CDN into public/sprites/
 * These files are gitignored. Do not commit them.
 *
 * Usage: npm run sprites:fetch
 */
import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..", "public", "sprites");

const MONS = [
  { id: "bulbasaur", n: 1 },
  { id: "squirtle", n: 7 },
  { id: "pikachu", n: 25 },
  { id: "psyduck", n: 54 },
];

const RAW =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (
          res.statusCode &&
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          get(res.headers.location).then(resolve, reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`${url} → ${res.statusCode}`));
          res.resume();
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      })
      .on("error", reject);
  });
}

async function save(url, dest) {
  const buf = await get(url);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
  console.log("✓", path.relative(process.cwd(), dest));
}

async function main() {
  for (const { id, n } of MONS) {
    const dir = path.join(ROOT, id);
    fs.mkdirSync(dir, { recursive: true });
    await save(`${RAW}/${n}.png`, path.join(dir, "front.png"));
    await save(`${RAW}/back/${n}.png`, path.join(dir, "back.png"));
    await save(`${RAW}/${n}.png`, path.join(dir, "icon.png"));
    try {
      await save(
        `${RAW}/versions/generation-v/black-white/animated/${n}.gif`,
        path.join(dir, "front.gif"),
      );
    } catch (e) {
      console.warn("⚠ no animated gif for", id, e.message);
    }
  }
  console.log("\nDone. Set NEXT_PUBLIC_USE_REAL_SPRITES=true in .env.local");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
