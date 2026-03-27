import Link from "next/link";
import { studioDocuments } from "@/data/studio";

export default function Blog() {
  return (
    <div className="page-shell">
      <div className="site-shell space-y-8">
        <section className="hero-card px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow">Bulletins & Archive</p>
              <h1 className="font-display mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
                工作室文告、制度摘要与室史归档
              </h1>
              <p className="lead mt-6 max-w-3xl">
                这里不再放模板式博客文章，而是集中展示工作室当前公开可读的制度文告。每篇文告都来自统一的数据文件，口径与首页、关于、项目、联系页保持一致。
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-accent-gold">公开文告数</p>
                <p className="mt-3 font-display text-4xl text-foreground">{studioDocuments.length}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  覆盖根本制度、室史沿革、组织架构、纪律边界与荣誉行动。
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-accent-gold">更新方式</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  统一修改 `studio.ts` 后，多页面同步更新，不再出现一页说时间线、一页又另写制度的断裂。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5">
          {studioDocuments.map((document) => (
            <article key={document.slug} className="glass-card p-6 sm:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span>{document.date}</span>
                    <span>·</span>
                    <span>{document.category}</span>
                    <span>·</span>
                    <span>{document.readingTime}</span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl text-foreground">{document.title}</h2>
                  <p className="mt-4 text-sm leading-8 text-muted-foreground">{document.excerpt}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {document.highlights.map((highlight) => (
                      <span key={highlight} className="tag-pill">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground">
                    {document.sections.length} 个章节
                  </span>
                  <Link
                    href={`/blog/${document.slug}`}
                    className="rounded-full bg-[linear-gradient(135deg,rgba(243,199,107,0.95),rgba(143,211,255,0.95))] px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
                  >
                    阅读全文
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
