"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PostEditor from "@/components/admin/PostEditor";

export default function NewPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("tech");
  const [thumbnail, setThumbnail] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSave(published: boolean) {
    if (!title || !description || !content) {
      alert("Please fill in title, description, and content");
      return;
    }

    setSaving(true);

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        category,
        thumbnail,
        content,
        published,
      }),
    });

    setSaving(false);

    if (res.ok) {
      router.push("/admin");
    } else {
      const data = await res.json();
      alert(data.error || "Failed to save post");
    }
  }

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">New Post</h1>
        <div className="flex gap-3">
          <button
            onClick={() => handleSave(false)}
            disabled={saving}
            className="rounded-md border border-border px-4 py-2 text-sm text-muted transition-colors hover:bg-surface disabled:opacity-50"
          >
            Save Draft
          </button>
          <button
            onClick={() => handleSave(true)}
            disabled={saving}
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-dark disabled:opacity-50"
          >
            Publish
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Title */}
        <div>
          <label className="mb-1 block text-sm font-medium text-muted">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post title"
            className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-lg font-semibold text-foreground outline-none focus:border-accent"
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-1 block text-sm font-medium text-muted">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief description for post cards and SEO"
            rows={2}
            className="w-full resize-none rounded-md border border-border bg-background px-4 py-2.5 text-foreground outline-none focus:border-accent"
          />
        </div>

        {/* Category & Thumbnail */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-muted">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-foreground outline-none focus:border-accent"
            >
              <option value="tech">Tech</option>
              <option value="life">Life</option>
              <option value="books">Books</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-muted">
              Thumbnail URL
            </label>
            <input
              type="url"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              placeholder="https://..."
              className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-foreground outline-none focus:border-accent"
            />
          </div>
        </div>

        {/* Rich Text Editor */}
        <div>
          <label className="mb-1 block text-sm font-medium text-muted">
            Content
          </label>
          <PostEditor content={content} onChange={setContent} />
        </div>
      </div>
    </main>
  );
}
