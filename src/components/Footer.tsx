import Link from "next/link";
import { studioProfile } from "@/data/studio";

const quickLinks = [
  { href: "/about", label: "制度概览" },
  { href: "/blog", label: "文告归档" },
  { href: "/projects", label: "建设项目" },
  { href: "/contact", label: "站内联络" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-8 pt-4">
      <div className="site-shell">
        <div className="glass-card px-6 py-8 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
            <div className="space-y-4">
              <div>
                <p className="eyebrow">站点说明</p>
                <h2 className="mt-3 font-display text-2xl text-foreground">
                  {studioProfile.name}
                </h2>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                {studioProfile.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {studioProfile.charterMilestones.map((milestone) => (
                  <span key={milestone} className="tag-pill">
                    {milestone}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-foreground">快速入口</p>
                <div className="mt-4 flex flex-col gap-3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground">制度标识</p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                  <p>核心宗旨：{studioProfile.corePurpose}</p>
                  <p>核心理念：{studioProfile.coreValues.join(" / ")}</p>
                  <p>成立时间：{studioProfile.foundedAt}</p>
                  <p>重建时间：{studioProfile.rebuiltAt}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {currentYear} {studioProfile.name}，制度文本与站点叙事保持同源。</p>
            <Link href="#" className="transition-colors hover:text-foreground">
              返回页首
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
