import Link from "next/link";

const posts = [
  {
    slug: "gongzuoshi-gangyao",
    title: "冰雪祁缘工作室公约（修订二）",
    date: "2026-03-11",
    excerpt: "本公约经工作室全员大会2025年12月12日通过，历经两次常务会议修改，明确工作室核心宗旨、组织架构、成员权利义务及各项纪律准则，为工作室发展提供根本遵循。",
    tags: ["工作室公约", "规章制度"],
    readingTime: "15 min",
  },
  {
    slug: "gongzuoshi-fazhanlishi",
    title: "冰雪祁缘工作室发展全历程",
    date: "2025-11-11",
    excerpt: "梳理工作室从2023年“三热”心理咨询室成立，历经多次更名、解散与重建，最终定名为冰雪祁缘工作室的完整发展脉络，记录关键节点与重大事件。",
    tags: ["发展历史", "工作室沿革"],
    readingTime: "12 min",
  },
  {
    slug: "yaoxuebao-jiang-setting",
    title: "“姚雪豹”奖设立与评选规则",
    date: "2025-12-12",
    excerpt: "受“香农”奖启发设立的工作室专属荣誉，旨在表彰践行抽象精神表现突出的成员，本文详细介绍奖项设立背景、评选流程及首届奖项筹备细节。",
    tags: ["荣誉表彰", "姚雪豹奖"],
    readingTime: "8 min",
  },
  {
    slug: "zuzhi-jiegou-yunxing",
    title: "冰雪祁缘工作室组织架构与运行机制",
    date: "2025-12-19",
    excerpt: "详解工作室全员大会、常务会议及各类专项委员会的职责与权限，阐述民主集中制的议事原则，以及成员加入、转正、退出的完整流程规范。",
    tags: ["组织架构", "运行机制"],
    readingTime: "14 min",
  },
  {
    slug: "xiaojiji-gongzuo-jilu",
    title: "肃清消极怠工行为工作实施细则",
    date: "2025-12-19",
    excerpt: "针对小组大作业摸鱼行为泛滥问题，工作室成立专项非常委员会，本文明确消极怠工行为排查、认定、整改的全流程工作要求与实施标准。",
    tags: ["纪律整治", "非常委员会"],
    readingTime: "10 min",
  },
  {
    slug: "gongzuoshi-jilv-yaoQiu",
    title: "冰雪祁缘工作室三大纪律核心要求",
    date: "2025-12-12",
    excerpt: "围绕语言纪律、财产纪律、保密纪律三大核心，明确工作室成员的行为红线与沟通准则，保障工作室内部和谐稳定与信息安全。",
    tags: ["工作室纪律", "行为准则"],
    readingTime: "7 min",
  }
];

export default function Blog() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <section className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">工作室专栏</h1>
          <p className="text-muted-foreground text-lg">
            记录工作室发展，梳理规章制度 📝
          </p>
          <div className="h-1 w-20 bg-accent rounded mt-4" />
        </section>

        {/* Post List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="p-6 sm:p-8 bg-muted/30 border border-border rounded-xl hover:border-accent transition-colors group"
            >
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                <time>{post.date}</time>
                <span>·</span>
                <span>{post.readingTime} 阅读</span>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm text-accent hover:underline"
                >
                  阅读全文 →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state hint */}
        <div className="mt-12 text-center py-12 border border-dashed border-border rounded-xl">
          <p className="text-muted-foreground">
            更多工作室内容正在整理... 🚧
          </p>
        </div>
      </div>
    </div>
  );
}