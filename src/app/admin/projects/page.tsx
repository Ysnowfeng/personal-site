"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface Project {
  _id?: string;
  name: string;
  description: string;
  tech: string[];
  stars: number;
  icon: string;
  link: string;
}

export default function AdminProjects() {
  const searchParams = useSearchParams();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [form, setForm] = useState<Project>({
    name: "",
    description: "",
    tech: [],
    stars: 0,
    icon: "🚀",
    link: "#",
  });
  const [techInput, setTechInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadProjects();
    
    if (searchParams.get("action") === "new") {
      handleNew();
    }
  }, [searchParams]);

  const loadProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error("Failed to load:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNew = () => {
    setEditingProject(null);
    setForm({
      name: "",
      description: "",
      tech: [],
      stars: 0,
      icon: "🚀",
      link: "#",
    });
    setTechInput("");
    setShowForm(true);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setForm(project);
    setTechInput(project.tech.join(", "));
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("确定要删除这个项目吗？")) return;
    
    try {
      await fetch(`/api/projects?id=${id}`, { method: "DELETE" });
      loadProjects();
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const projectData = {
        ...form,
        tech: techInput.split(",").map((t) => t.trim()).filter(Boolean),
      };

      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingProject ? { ...projectData, _id: editingProject._id } : projectData),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "保存失败");
        return;
      }

      setMessage("保存成功！");
      setShowForm(false);
      loadProjects();
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
        <h1 className="text-2xl font-bold">项目管理</h1>
        <button
          onClick={handleNew}
          className="px-4 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors"
        >
          + 新建项目
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-6">
                {editingProject ? "编辑项目" : "新建项目"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">项目名称</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">描述</label>
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">技术栈 (逗号分隔)</label>
                  <input
                    type="text"
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                    className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
                    placeholder="React, Node.js, TypeScript"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">图标</label>
                    <input
                      type="text"
                      value={form.icon}
                      onChange={(e) => setForm({ ...form, icon: e.target.value })}
                      className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Star 数</label>
                    <input
                      type="number"
                      value={form.stars}
                      onChange={(e) => setForm({ ...form, stars: parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">链接</label>
                  <input
                    type="url"
                    value={form.link}
                    onChange={(e) => setForm({ ...form, link: e.target.value })}
                    className="w-full px-4 py-2 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-accent"
                    placeholder="https://github.com/..."
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
                    className="px-6 py-2 bg-muted border border-border rounded-lg hover:bg-muted/80"
                  >
                    取消
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Projects List */}
      <div className="space-y-4">
        {projects.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">暂无项目，点击新建项目开始</p>
        ) : (
          projects.map((project) => (
            <div
              key={project._id}
              className="p-4 bg-muted/30 border border-border rounded-xl flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{project.icon}</span>
                <div>
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.description.slice(0, 50)}...</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(project)}
                  className="px-3 py-1 text-sm bg-muted border border-border rounded-lg hover:bg-muted/80"
                >
                  编辑
                </button>
                <button
                  onClick={() => handleDelete(project._id!)}
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
