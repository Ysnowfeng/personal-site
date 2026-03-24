"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // 模拟发送
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <section className="mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">联系我</h1>
          <p className="text-muted-foreground text-lg">
            有想法？合作？或者只是想聊聊技术？ 👇
          </p>
          <div className="h-1 w-20 bg-accent rounded mx-auto mt-4" />
        </section>

        {/* Contact Methods */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: "📧", label: "邮箱", value: "xiaozeng@qq.com" },
            { icon: "🐙", label: "GitHub", value: "github.com/xiaozeng" },
            { icon: "🐦", label: "Twitter", value: "@xiaozeng" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-6 bg-muted/30 border border-border rounded-xl text-center hover:border-accent transition-colors"
            >
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
              <p className="font-medium truncate">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              姓名
            </label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
              placeholder="你的名字"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              邮箱
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              留言
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="想和我说点什么..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "发送中..." : status === "success" ? "已发送 ✓" : "发送消息"}
          </button>

          {status === "success" && (
            <p className="text-center text-accent-green">
              消息已发送，我会尽快回复你！ 🎉
            </p>
          )}
        </form>

        {/* Additional info */}
        <div className="mt-12 text-center py-6 border-t border-border">
          <p className="text-muted-foreground text-sm">
            也可以直接给我发邮件：{" "}
            <a href="mailto:xiaozeng@example.com" className="text-accent hover:underline">
              xiaozeng@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
