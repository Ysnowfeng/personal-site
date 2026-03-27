import Link from "next/link";
import { disciplineRules, governanceBodies, studioDocuments, studioInitiatives } from "@/data/studio";

export default function Projects() {
  return (
    <div className="page-shell">
      <div className="site-shell space-y-8">
        <section className="hero-card px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow">Institution Building</p>
              <h1 className="font-display mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
                工作室建设项目，
                <br />
                记录制度如何一步步落地。
              </h1>
              <p className="lead mt-6 max-w-3xl">
                这里展示的不是泛泛而谈的“项目案例”，而是工作室在公约、成员、荣誉、纪律和象征体系上的具体建设动作。每个项目都能追溯到对应文告。
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-accent-gold">建设项目数</p>
                <p className="mt-3 font-display text-4xl text-foreground">{studioInitiatives.length}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  从公约修订到专项整治，项目化描述制度落地过程。
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-accent-gold">可追溯文告</p>
                <p className="mt-3 font-display text-4xl text-foreground">{studioDocuments.length}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  每个建设条目都指向统一文告源，不再单独写一套介绍词。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          {studioInitiatives.map((initiative) => {
            const relatedDocument = studioDocuments.find(
              (document) => document.slug === initiative.relatedDocumentSlug,
            );

            return (
              <article key={initiative.slug} className="glass-card p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{initiative.icon}</span>
                    <div>
                      <p className="text-sm text-accent-gold">{initiative.period}</p>
                      <h2 className="mt-2 text-2xl font-semibold text-foreground">{initiative.name}</h2>
                    </div>
                  </div>
                  <span className="tag-pill">{initiative.status}</span>
                </div>

                <p className="mt-5 text-sm leading-8 text-muted-foreground">{initiative.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {initiative.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-white/4 p-5">
                  <p className="text-sm text-accent-gold">阶段成果</p>
                  <div className="mt-4 space-y-3">
                    {initiative.outcomes.map((outcome) => (
                      <p key={outcome} className="text-sm leading-7 text-muted-foreground">
                        {outcome}
                      </p>
                    ))}
                  </div>
                </div>

                {relatedDocument && (
                  <div className="mt-6 flex items-center justify-between gap-4 rounded-[1.4rem] border border-white/10 bg-white/4 p-5">
                    <div>
                      <p className="text-sm text-muted-foreground">关联文告</p>
                      <p className="mt-2 text-lg font-semibold text-foreground">{relatedDocument.title}</p>
                    </div>
                    <Link
                      href={`/blog/${relatedDocument.slug}`}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground transition-colors hover:bg-white/10"
                    >
                      查看文告
                    </Link>
                  </div>
                )}
              </article>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="glass-card p-6 sm:p-8">
            <p className="eyebrow">治理承接</p>
            <h2 className="section-title mt-4">建设项目由哪些机构承接</h2>
            <div className="mt-8 space-y-4">
              {governanceBodies.slice(0, 4).map((body) => (
                <article key={body.name} className="rounded-[1.45rem] border border-white/10 bg-white/4 p-5">
                  <h3 className="text-lg font-semibold text-foreground">{body.name}</h3>
                  <p className="mt-2 text-sm text-accent-gold">{body.type}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{body.responsibilities[0]}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="glass-card p-6 sm:p-8">
            <p className="eyebrow">纪律约束</p>
            <h2 className="section-title mt-4">所有项目都受三大纪律兜底</h2>
            <div className="mt-8 space-y-4">
              {disciplineRules.map((rule) => (
                <article key={rule.name} className="rounded-[1.45rem] border border-white/10 bg-white/4 p-5">
                  <h3 className="text-lg font-semibold text-foreground">{rule.name}</h3>
                  <p className="mt-3 text-sm text-foreground">{rule.principle}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{rule.details[1] ?? rule.details[0]}</p>
                </article>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
