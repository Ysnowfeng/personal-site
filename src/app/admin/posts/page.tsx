"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface Post {
  _id?: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
}

export default function AdminPosts() {
  const searchParams = useSearchParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [form, setForm] = useState<Post>({
    slug: "",
    title: "",
    date: new Date().toISOString().split("T")[0],
    excerpt: "",
    tags: [],
    readingTime: "5 min",
  });
  const [tagsInput, setTagsInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadPosts();
    
    // Check if creating new
    if (searchParams.get("action") === "new") {
      handleNew();
    }
  }, [searchParams]);

  const loadPosts = async () => {
    try {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Failed to load posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNew = () => {
    setEditingPost(null);
    setForm({
      slug: "",
      title: "",
      date: new Date().toISOString().split("T")[0],
      excerpt: "",
      tags: [],
      readingTime: "5 min",
    });
    setTagsInput("");
    setShowForm(true);
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
    setForm(post);
    setTagsInput(post.tags.join(", "));
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("确定要删除这篇文章吗？")) return;
    
    try {
      await fetch(`/api/posts?id=${id}`, { method: "DELETE" });
      loadPosts();
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const postData = {
        ...form,
        tags: tagsInput.split(",").map((t) => t.trim()).filter(Boolean),
      };

      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingPost ? { ...postData, _id: editingPost._id } : postData),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "保存失败");
        return;
      }

      setMessage("保存成功！");
      setShowForm(false);
      loadPosts();
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
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">文章管理</h1>
        <button
          onClick={handleNew}
          className="px-4 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors"
        >
          + 新建文章
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-6">
                {editingPost ? "编辑文章" : "新建文章"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">标题</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Slug (URL路径)</label>
                  <input
                    type="text"
                    value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: e.target.value.toLowerCase().replace(/\s+/g, "-") })}
                    className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
                    placeholder="my-article-title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">日期</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">摘要</label>
                  <textarea
                    value={form.excerpt}
                    onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">标签 (逗号分隔)</label>
                  <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
                    placeholder="React, TypeScript, 教程"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">阅读时间</label>
                  <input
                    type="text"
                    value={form.readingTime}
                    onChange={(e) => setForm({ ...form, readingTime: e.target.value })}
                    className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
                    placeholder="5 min"
                  />
                </div>

                {message && (
                  <p className={message.includes("成功") ? "text-green-500" : "text-red-500"}>
                    {message}
                  </p>
                )}

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
                  >
                    {saving ? "保存中..." : "保存"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-2 bg-muted border border-border rounded-lg hover:bg-muted/80 transition-colors"
                  >
                    取消
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">暂无文章，点击新建文章开始创作</p>
        ) : (
          posts.map((post) => (
            <div
              key={post._id}
              className="p-4 bg-muted/30 border border-border rounded-xl flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.date} · {post.slug}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(post)}
                  className="px-3 py-1 text-sm bg-muted border border-border rounded-lg hover:bg-muted/80"
                >
                  编辑
                </button>
                <button
                  onClick={() => handleDelete(post._id!)}
                  className="px-3 py-1 text-sm text-red-500 hover:bg-red-500/10 rounded-lg"
                >
                  删除
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
