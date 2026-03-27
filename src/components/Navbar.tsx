"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { studioProfile } from "@/data/studio";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于" },
  { href: "/blog", label: "文告" },
  { href: "/projects", label: "建设" },
  { href: "/contact", label: "联络" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      <div className="site-shell pt-4">
        <div className="glass-card flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(243,199,107,0.38),_rgba(18,33,55,0.1)_52%),linear-gradient(145deg,_rgba(18,49,80,0.95),_rgba(8,18,32,0.94))] text-lg shadow-[0_10px_30px_rgba(0,0,0,0.28)]">
              ❄
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm text-muted-foreground">制度站点</p>
              <p className="font-display truncate text-base text-foreground sm:text-lg">
                {studioProfile.name}
              </p>
            </div>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  isActive(link.href)
                    ? "bg-white/10 text-foreground shadow-[inset_0_0_0_1px_rgba(143,211,255,0.24)]"
                    : "text-muted-foreground hover:bg-white/6 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/blog"
              className="ml-2 rounded-full bg-[linear-gradient(135deg,rgba(243,199,107,0.95),rgba(143,211,255,0.95))] px-4 py-2 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              查看公约
            </Link>
          </div>

          <button
            type="button"
            className="rounded-full border border-white/10 p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="glass-card mt-3 px-4 py-4 md:hidden">
            <div className="mb-4 border-b border-white/10 pb-4">
              <p className="font-display text-lg">{studioProfile.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{studioProfile.tagline}</p>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm transition-colors ${
                    isActive(link.href)
                      ? "bg-white/10 text-foreground"
                      : "text-muted-foreground hover:bg-white/6 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-2xl bg-[linear-gradient(135deg,rgba(243,199,107,0.95),rgba(143,211,255,0.95))] px-4 py-3 text-center text-sm font-semibold text-slate-950"
              >
                进入制度文告区
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
