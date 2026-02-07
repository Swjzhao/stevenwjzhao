import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | We Are Dreamers",
  description: "Thoughts on tech, life, and books.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-primary">Blog</h1>
      <p className="text-muted">Posts coming soon. Stay tuned!</p>
    </main>
  );
}
