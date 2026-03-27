import {
  currentRosters,
  governanceBodies,
  memberFramework,
  studioProfile,
  studioTimeline,
} from "@/data/studio";

export default function About() {
  return (
    <div className="page-shell">
      <div className="site-shell space-y-8">
        <section className="hero-card px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="eyebrow">About The Studio</p>
              <h1 className="font-display mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
                从前身沿革到制度成型，
                <br />
                这里给出完整的工作室框架。
              </h1>
              <p className="lead mt-6 max-w-3xl">
                {studioProfile.description}
              </p>
            </div>

            <div className="glass-card p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-accent-gold">Symbol & Seal</p>
              <div className="mt-5 space-y-5">
                <div>
                  <p className="text-sm text-muted-foreground">标志徽</p>
                  <p className="mt-2 text-sm leading-7 text-foreground">{studioProfile.visualIdentity}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">公章说明</p>
                  <p className="mt-2 text-sm leading-7 text-foreground">{studioProfile.sealStatement}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="glass-card p-6 sm:p-8">
            <p className="eyebrow">成员制度</p>
            <h2 className="section-title mt-4">正式成员与临时室友的双轨结构</h2>
            <p className="lead mt-4">
              成员分类、加入、转正和退出都被公约写成了明确流程。工作室不是靠“熟悉感”吸纳成员，而是靠审查、评议和大会表决。
            </p>

            <div className="mt-8 grid gap-4">
              {memberFramework.categories.map((category) => (
                <article key={category.name} className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
                  <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{category.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
                <p className="text-sm text-accent-gold">加入路径</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{memberFramework.joining}</p>
                <p className="mt-4 text-sm text-accent-gold">转正路径</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{memberFramework.regularization}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
                <p className="text-sm text-accent-gold">退出原则</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{memberFramework.exit}</p>
              </div>
            </div>
          </article>

          <article className="glass-card p-6 sm:p-8">
            <p className="eyebrow">权利与义务</p>
            <h2 className="section-title mt-4">成员既有发言权，也有学习与守纪义务</h2>

            <div className="mt-8 space-y-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
                <p className="text-sm text-accent-gold">正式成员权利</p>
                <div className="mt-4 space-y-3">
                  {memberFramework.rights.map((right) => (
                    <p key={right} className="text-sm leading-7 text-muted-foreground">
                      {right}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
                <p className="text-sm text-accent-gold">成员义务</p>
                <div className="mt-4 space-y-3">
                  {memberFramework.obligations.map((obligation) => (
                    <p key={obligation} className="text-sm leading-7 text-muted-foreground">
                      {obligation}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="glass-card p-6 sm:p-8">
          <p className="eyebrow">组织架构</p>
          <h2 className="section-title mt-4">从权威机构到专项委员会的完整治理图</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {governanceBodies.map((body) => (
              <article key={body.name} className="rounded-[1.55rem] border border-white/10 bg-white/4 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="tag-pill">{body.type}</span>
                  <span className="text-sm text-muted-foreground">{body.cadence}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{body.name}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{body.composition}</p>
                <div className="mt-4 space-y-2">
                  {body.responsibilities.map((item) => (
                    <p key={item} className="text-sm leading-7 text-muted-foreground">
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="glass-card p-6 sm:p-8">
            <p className="eyebrow">现行成员</p>
            <h2 className="section-title mt-4">附则中的现行组织名单</h2>
            <div className="mt-8 space-y-4">
              {currentRosters.map((roster) => (
                <article key={roster.group} className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
                  <h3 className="text-lg font-semibold text-foreground">{roster.group}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {roster.members.map((member) => (
                      <span key={member} className="tag-pill">
                        {member}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </article>

          <article className="glass-card p-6 sm:p-8">
            <p className="eyebrow">完整时间线</p>
            <h2 className="section-title mt-4">组织沿革、重建、制度与荣誉汇总</h2>
            <div className="timeline-rail mt-8 space-y-6">
              {studioTimeline.map((event) => (
                <article key={`${event.date}-${event.title}`} className="timeline-item">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-sm text-accent-gold">{event.date}</p>
                    <span className="tag-pill">{event.category}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{event.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{event.summary}</p>
                </article>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
