"use client";

import { useState } from "react";
import { contactPrinciples, contactTopics, studioProfile } from "@/data/studio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setStatus("error");
        setFeedback(data.error || "提交失败，请稍后重试。");
        return;
      }

      setStatus("success");
      setFeedback(data.message || "消息已收到。");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setFeedback("提交失败，请检查网络后重试。");
    }
  };

  return (
    <div className="page-shell">
      <div className="site-shell space-y-8">
        <section className="hero-card px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="eyebrow">Contact & Coordination</p>
              <h1 className="font-display mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
                站内联络页也遵循同一套制度边界。
              </h1>
              <p className="lead mt-6 max-w-3xl">
                联系页不再沿用个人博客式的自我介绍口吻，而是作为 {studioProfile.name}
                的公开联络入口，用于接收制度修订建议、室史补录和文告协作请求。
              </p>
            </div>

            <div className="glass-card p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-accent-gold">联络原则</p>
              <div className="mt-5 space-y-4">
                {contactPrinciples.map((principle) => (
                  <p key={principle} className="text-sm leading-7 text-muted-foreground">
                    {principle}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="glass-card p-6 sm:p-8">
            <p className="eyebrow">联络议题</p>
            <h2 className="section-title mt-4">欢迎围绕以下事项来信</h2>
            <div className="mt-8 space-y-4">
              {contactTopics.map((topic) => (
                <article key={topic.title} className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
                  <h3 className="text-xl font-semibold text-foreground">{topic.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{topic.description}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="glass-card p-6 sm:p-8">
            <p className="eyebrow">发送留言</p>
            <h2 className="section-title mt-4">留下可回联方式与具体事项</h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-muted-foreground">
                  称呼
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="w-full rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent"
                  placeholder="例如：制度整理人 / 室史补录者"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-muted-foreground">
                  回联邮箱
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="w-full rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-muted-foreground">
                  具体内容
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  rows={7}
                  className="w-full resize-none rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent"
                  placeholder="请写明涉及的制度条目、历史节点或协作事项。"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-[linear-gradient(135deg,rgba(243,199,107,0.95),rgba(143,211,255,0.95))] px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? "提交中..." : "提交联络事项"}
              </button>

              {feedback && (
                <p className={`text-sm leading-7 ${status === "error" ? "text-amber-200" : "text-accent-green"}`}>
                  {feedback}
                </p>
              )}
            </form>
          </article>
        </section>
      </div>
    </div>
  );
}
