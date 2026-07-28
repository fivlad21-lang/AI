import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getPost } from "@/data/blog";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMeta } from "@/lib/meta";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    blogPosts.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = (isLocale(raw) ? raw : "bg") as Locale;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta(locale, {
    title: post.title[locale],
    description: post.excerpt[locale],
    path: `blog/${slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const post = getPost(slug);
  if (!post) notFound();
  const dict = getDictionary(locale);

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 md:px-6">
      <p className="text-xs text-ink-muted">{post.date}</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
        {post.title[locale]}
      </h1>
      <p className="mt-8 text-base leading-relaxed text-ink-muted">{post.body[locale]}</p>
      <p className="mt-10">
        <Link href={`/${locale}/blog`} className="text-sm text-sea">
          ← {dict.nav.blog}
        </Link>
      </p>
    </article>
  );
}
