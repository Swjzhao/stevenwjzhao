"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";

interface Post {
  _id: string;
  title: string;
  slug: string;
  category: string;
  published: boolean;
  createdAt: string;
}

export default function AdminDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const res = await fetch("/api/posts?published=true&limit=100");
    const allPublished = await res.json();
    const res2 = await fetch("/api/posts?published=false&limit=100");
    const allDrafts = await res2.json();
    setPosts([...allDrafts.posts, ...allPublished.posts]);
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this post?")) return;

    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    setPosts(posts.filter((p) => p._id !== id));
  }

  async function togglePublish(id: string, currentStatus: boolean) {
    await fetch(`/api/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !currentStatus }),
    });
    setPosts(
      posts.map((p) =>
        p._id === id ? { ...p, published: !currentStatus } : p,
      ),
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
        <div className="flex gap-3">
          <Link
            href="/admin/editor"
            className="inline-flex h-10 items-center rounded-md bg-accent px-5 font-semibold text-background transition-colors hover:bg-accent-dark"
          >
            New Post
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="inline-flex h-10 items-center rounded-md border border-border px-5 text-sm text-muted transition-colors hover:bg-surface"
          >
            Sign Out
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-muted">Loading posts...</p>
      ) : posts.length === 0 ? (
        <div className="rounded-lg border border-border bg-surface p-12 text-center">
          <p className="mb-4 text-lg text-muted">No posts yet</p>
          <Link
            href="/admin/editor"
            className="text-accent hover:text-accent-dark"
          >
            Create your first post &rarr;
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full">
            <thead className="border-b border-border bg-surface">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted">
                  Date
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr
                  key={post._id}
                  className="border-b border-border last:border-0"
                >
                  <td className="px-4 py-3 text-sm font-medium text-primary">
                    {post.title}
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium capitalize text-accent">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => togglePublish(post._id, post.published)}
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        post.published
                          ? "bg-green-500/10 text-green-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </button>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/admin/editor/${post._id}`}
                        className="text-xs text-accent hover:text-accent-dark"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(post._id)}
                        className="text-xs text-red-400 hover:text-red-300"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
