"use client";

import { useEffect, useState } from "react";

interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  email: string;
  github: string;
  twitter: string;
  juejin: string;
  skills: string[];
}

export default function AdminProfile() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState<Profile>({
    name: "",
    title: "",
    bio: "",
    avatar: "",
    email: "",
    github: "",
    twitter: "",
    juejin: "",
    skills: [],
  });
  const [skillsInput, setSkillsInput] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const res = await fetch("/api/profile");
      const data = await res.json();
      setForm(data);
      setSkillsInput(data.skills?.join(", ") || "");
    } catch (error) {
      console.error("Failed to load:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const profileData = {
        ...form,
        skills: skillsInput.split(",").map((s) => s.trim()).filter(Boolean),
      };

      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profileData),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "保存失败");
        return;
      }

      setMessage("保存成功！");
    } catch {
      setMessage("保存失败");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-muted-foreground">加载中...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">个人资料</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">名字</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">头像 Emoji</label>
            <input
              type="text"
              value={form.avatar}
              onChange={(e) => setForm({ ...form, avatar: e.target.value })}
              className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">职位/头衔</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">个人简介</label>
          <textarea
            value={form.bio}
            onChange={(e) => setForm({ ...form, bio: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">技能标签 (逗号分隔)</label>
          <input
            type="text"
            value={skillsInput}
            onChange={(e) => setSkillsInput(e.target.value)}
            className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
            placeholder="React, Vue, Node.js, TypeScript"
          />
        </div>

        <div className="border-t border-border pt-6">
          <h3 className="text-lg font-semibold mb-4">联系方式</h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">邮箱</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">GitHub</label>
              <input
                type="url"
                value={form.github}
                onChange={(e) => setForm({ ...form, github: e.target.value })}
                className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
                placeholder="https://github.com/username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Twitter</label>
              <input
                type="url"
                value={form.twitter}
                onChange={(e) => setForm({ ...form, twitter: e.target.value })}
                className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
                placeholder="https://twitter.com/username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">掘金</label>
              <input
                type="url"
                value={form.juejin}
                onChange={(e) => setForm({ ...form, juejin: e.target.value })}
                className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
                placeholder="https://juejin.cn/user/xxx"
              />
            </div>
          </div>
        </div>

        {message && (
          <p className={message.includes("成功") ? "text-green-500" : "text-red-500"}>
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={saving}
          className="px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
        >
          {saving ? "保存中..." : "保存资料"}
        </button>
      </form>
    </div>
  );
}
