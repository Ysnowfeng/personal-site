export default function About() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <section className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            关于冰雪祁缘工作室 <span className="wave">❄️</span>
          </h1>
          <div className="h-1 w-20 bg-accent rounded mb-8" />
        </section>

        {/* Bio */}
        <section className="mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            你好！冰雪祁缘工作室是在中国共产党的领导下，研究抽象行为和精神内涵的试验性组织，核心宗旨为抽象，秉持平等与团结的核心理念，于2025年11月11日完成重建，是由多方成员凝聚而成的集体组织。
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            我们以抽象精神为指引，打破常规思维桎梏、以独特视角洞察事物本质，将抽象理念与具体实践结合，在各自领域勇于探索，主动践行社会责任，为国家建设贡献自身力量，实现个人价值与社会价值的统一。
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            工作室建立了完善的组织架构与规章制度，设立各类专项委员会开展工作，同时设立专属荣誉表彰，激励成员践行抽象精神，全体成员同心同德，共同推动工作室发展。
          </p>
        </section>

        {/* Studio Connotation */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-accent">##</span> 工作室核心内涵
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-accent">核心宗旨</h3>
              <p className="text-muted-foreground">
                抽象，以打破常规思维桎梏、独特视角洞察事物本质的认知方式与行为准则为核心，将抽象精神转化为行动自觉，结合国家发展需求践行实践。
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-accent">核心理念</h3>
              <p className="text-muted-foreground">
                平等与团结，重建后不再设立室长职务，摒弃等级化设置，全体成员平等参与工作室事务，凝聚集体力量推动发展。
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-accent">行为准则</h3>
              <p className="text-muted-foreground">
                拥护党的领导，遵守国家法律法规与社会公序良俗，主动学习传播抽象文化，严守工作室纪律，积极参与集体事务与建设。
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-accent">核心目标</h3>
              <p className="text-muted-foreground">
                以抽象精神指导日常实践，让成员在学习、工作与生活中大胆突破，以个性化方式践行社会责任，为国家繁荣富强贡献力量。
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-accent">##</span> 发展历程
          </h2>
          
          <div className="space-y-8 border-l-2 border-border pl-8">
            {[
              { year: "2023.11.24", title: "“三热”心理咨询室", company: "工作室前身正式成立" },
              { year: "2024.02", title: "6-30 抽象工作室", company: "完成首次名称变更" },
              { year: "2024.05.15", title: "第一届全室代表大会", company: "选举产生室长，完善初期架构" },
              { year: "2024.06.13", title: "6-30 抽象工作室解散", company: "首次解散，暂别发展阶段" },
              { year: "2025.09.29", title: "2-1-2 抽象工作室", company: "盛缘会主导完成工作室重建" },
              { year: "2025.10.30-11.03", title: "名称专项争论", company: "最终确定名称为冰雪祁缘工作室" },
              { year: "2025.11.11", title: "冰雪祁缘工作室", company: "完成重建，正式步入发展新阶段" },
              { year: "2025.12.12", title: "全员大会召开", company: "通过《冰雪祁缘工作室公约》等核心制度" },
              { year: "2026.03.11", title: "第二届“姚雪豹”奖授予", company: "响应上级号召，完成跨期荣誉表彰" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[2.6rem] w-4 h-4 rounded-full bg-accent border-4 border-background" />
                <time className="text-sm text-muted-foreground">{item.year}</time>
                <h3 className="font-semibold mt-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.company}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-8 bg-muted/30 rounded-xl">
          <p className="text-muted-foreground mb-4">想了解工作室更多详情？</p>
          <a href="/contact" className="text-accent hover:underline font-medium">
            联系我们 →
          </a>
        </section>
      </div>
    </div>
  );
}