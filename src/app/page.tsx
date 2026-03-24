import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          {/* Avatar */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent to-accent-purple flex items-center justify-center text-6xl shadow-lg shadow-accent/20 animate-bounce-subtle">
            👨‍💻
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            你好，我是曾老师 <span className="wave">👋</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-accent font-medium mb-6">
            全栈开发者 & CTFer
          </p>

          {/* Bio */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            热爱 <span className="text-accent-purple font-medium">CTF</span> 和{" "}
            <span className="text-accent-purple font-medium">艺术</span>
          喜欢分享技术心得，坚信{" "}
            <span className="text-accent-purple font-medium">代码即艺术</span>。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/blog"
              className="px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              阅读博客
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
            >
              查看项目
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">
            <span className="text-accent">#</span> 技术栈
          </h2>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "React", color: "hover:border-cyan-400 hover:text-cyan-400" },
              { label: "Vue.js", color: "hover:border-green-400 hover:text-green-400" },
              { label: "TypeScript", color: "hover:border-blue-400 hover:text-blue-400" },
              { label: "Node.js", color: "hover:border-green-500 hover:text-green-500" },
              { label: "Next.js", color: "hover:border-white hover:text-white" },
              { label: "NestJS", color: "hover:border-red-400 hover:text-red-400" },
              { label: "PostgreSQL", color: "hover:border-blue-500 hover:text-blue-500" },
              { label: "MongoDB", color: "hover:border-green-600 hover:text-green-600" },
              { label: "Docker", color: "hover:border-blue-400 hover:text-blue-400" },
              { label: "Git", color: "hover:border-orange-500 hover:text-orange-500" },
              { label: "AWS", color: "hover:border-yellow-500 hover:text-yellow-500" },
              { label: "Linux", color: "hover:border-gray-300 hover:text-gray-300" },
            ].map((skill) => (
              <span
                key={skill.label}
                className={`px-4 py-2 bg-background border border-border rounded-md text-sm text-muted-foreground transition-colors ${skill.color}`}
              >
                {skill.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold">
              <span className="text-accent">#</span> 最新文章
            </h2>
            <Link
              href="/blog"
              className="text-sm text-accent hover:underline"
            >
              查看全部 →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "TypeScript 5.0 装饰器完全指南",
                date: "2026-03-20",
                excerpt: "深入解析 TC39 装饰器提案，探讨如何在现代 TypeScript 项目中优雅地使用装饰器模式...",
                tags: ["TypeScript", "装饰器"],
              },
              {
                title: "从零打造高可用微服务架构",
                date: "2026-03-15",
                excerpt: "基于 NestJS + Docker + K8s 的微服务实战经验总结，涵盖服务发现、熔断降级...",
                tags: ["架构", "微服务"],
              },
            ].map((post, index) => (
              <article
                key={index}
                className="p-6 bg-muted/30 border border-border rounded-xl hover:border-accent transition-colors group cursor-pointer"
              >
                <time className="text-sm text-muted-foreground">{post.date}</time>
                <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">有问题或想法？</h2>
          <p className="text-muted-foreground mb-8">
            随时欢迎来找我交流技术、讨论合作，或者只是聊聊。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-accent to-accent-purple text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            联系我
          </Link>
        </div>
      </section>
    </div>
  );
}
