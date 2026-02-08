"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeletePostButton({ postId }: { postId: string }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this post?")) return;

    setDeleting(true);
    const res = await fetch(`/api/posts/${postId}`, { method: "DELETE" });

    if (res.ok) {
      router.push("/blog");
    } else {
      setDeleting(false);
      alert("Failed to delete post");
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={deleting}
      className="inline-flex items-center gap-1.5 rounded-md border border-red-500/30 px-4 py-1.5 text-sm font-semibold text-red-400 transition-colors hover:bg-red-500/10 disabled:opacity-50"
    >
      {deleting ? "Deleting..." : "Delete"}
    </button>
  );
}
