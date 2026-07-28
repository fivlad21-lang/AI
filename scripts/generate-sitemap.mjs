/**
 * Regenerates public/sitemap.xml from published listings + blog posts.
 * Usage: node scripts/generate-sitemap.mjs
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const site = process.env.NEXT_PUBLIC_SITE_URL || "https://ai.nomorevlad.vercel.app";
const locales = ["bg", "ru", "ua", "en"];

const pages = [
  "",
  "/buy",
  "/rent",
  "/sell",
  "/about",
  "/contacts",
  "/favorites",
  "/compare",
  "/guide",
  "/privacy",
  "/blog",
];

/** Keep in sync with src/data/listings.ts published slugs */
const listings = [
  "sea-view-apartment-sunny-beach",
  "modern-studio-burgas-center",
  "villa-garden-sozopol",
  "rent-apartment-nesebar",
  "penthouse-sveti-vlas",
  "rent-studio-pomorie",
];

/** Keep in sync with src/data/blog.ts */
const blog = [
  "buy-near-sunny-beach",
  "sell-with-media",
  "act-16-coast-checklist",
  "rent-burgas-season",
];

const urls = [];
for (const loc of locales) {
  for (const p of pages) urls.push(`${site}/${loc}${p}`);
  for (const slug of listings) urls.push(`${site}/${loc}/listings/${slug}`);
  for (const slug of blog) urls.push(`${site}/${loc}/blog/${slug}`);
}

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...urls.map((u) => `  <url><loc>${u}</loc></url>`),
  `</urlset>`,
  ``,
].join("\n");

const out = join(root, "public/sitemap.xml");
writeFileSync(out, xml);
console.log(`Wrote ${urls.length} URLs → public/sitemap.xml`);
