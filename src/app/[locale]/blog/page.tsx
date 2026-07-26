import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 md:px-6">
      <h1 className="font-display text-4xl font-semibold">{dict.blog.title}</h1>
      <p className="mt-3 text-ink-muted">{dict.blog.subtitle}</p>
      <ul className="mt-10 space-y-4">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/${locale}/blog/${post.slug}`}
              className="glass block rounded-3xl p-5 transition hover:bg-white/[0.08]"
            >
              <p className="text-xs text-ink-muted">{post.date}</p>
              <h2 className="mt-2 font-display text-xl font-semibold">{post.title[locale]}</h2>
              <p className="mt-2 text-sm text-ink-muted">{post.excerpt[locale]}</p>
              <p className="mt-3 text-sm font-semibold text-sea">{dict.blog.read} →</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
