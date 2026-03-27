import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDocumentBySlug, studioDocuments, studioProfile } from "@/data/studio";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return studioDocuments.map((document) => ({ slug: document.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const document = getDocumentBySlug(slug);

  if (!document) {
    return {
      title: "文告不存在",
    };
  }

  return {
    title: document.title,
    description: document.excerpt,
    openGraph: {
      title: `${document.title} | ${studioProfile.name}`,
      description: document.excerpt,
      type: "article",
      locale: "zh_CN",
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const document = getDocumentBySlug(slug);

  if (!document) {
    notFound();
  }

  const relatedDocuments = studioDocuments
    .filter((item) => item.slug !== document.slug)
    .slice(0, 2);

  return (
    <div className="page-shell">
      <div className="site-shell space-y-8">
        <section className="hero-card px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <Link href="/blog" className="transition-colors hover:text-foreground">
                文告归档
              </Link>
              <span>·</span>
              <span>{document.date}</span>
              <span>·</span>
              <span>{document.category}</span>
              <span>·</span>
              <span>{document.readingTime}</span>
            </div>
            <div>
              <p className="eyebrow">Studio Bulletin</p>
              <h1 className="font-display mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
                {document.title}
              </h1>
              <p className="lead mt-6 max-w-4xl">{document.excerpt}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {document.highlights.map((highlight) => (
                <span key={highlight} className="tag-pill">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="glass-card p-6 sm:p-8">
            <p className="eyebrow">正文</p>
            <div className="mt-6 space-y-8">
              {document.sections.map((section) => (
                <section key={section.heading} className="rounded-[1.6rem] border border-white/10 bg-white/4 p-6">
                  <h2 className="font-display text-2xl text-foreground">{section.heading}</h2>
                  <div className="rich-copy mt-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>

          <div className="space-y-6">
            <aside className="glass-card p-6 sm:p-8">
              <p className="eyebrow">阅读提示</p>
              <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
                <p>本站文告页面展示的是对 PDF 核心内容的结构化整理，用于与首页、关于、项目、联系页共享同一套制度叙事。</p>
                <p>如果要继续扩充原文细节，只需要修改统一数据文件即可，多页面会同时更新。</p>
                <p>涉及成员隐私和未公开事项的内容仍遵循保密纪律，不在详情页公开展开。</p>
              </div>
            </aside>

            <aside className="glass-card p-6 sm:p-8">
              <p className="eyebrow">相关文告</p>
              <div className="mt-6 space-y-4">
                {relatedDocuments.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="block rounded-[1.4rem] border border-white/10 bg-white/4 p-5 transition-transform hover:-translate-y-1"
                  >
                    <p className="text-sm text-accent-gold">{related.category}</p>
                    <h2 className="mt-2 text-lg font-semibold text-foreground">{related.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}
