import { connectDB } from "@/lib/db";
import Post from "@/models/Post";
import PostCard from "@/components/home/PostCard";
import Link from "next/link";

const categories = [
  { label: "All", value: "" },
  { label: "Tech", value: "tech" },
  { label: "Life", value: "life" },
  { label: "Books", value: "books" },
];

export const dynamic = "force-dynamic";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  await connectDB();

  const { category } = await searchParams;
  const filter: Record<string, unknown> = { published: true };
  if (category) filter.category = category;

  const posts = await Post.find(filter).sort({ createdAt: -1 }).lean();

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-primary">Blog</h1>

      {/* Category Tabs */}
      <div className="mb-10 flex gap-2">
        {categories.map((cat) => (
          <Link
            key={cat.value}
            href={cat.value ? `/blog?category=${cat.value}` : "/blog"}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              (category || "") === cat.value
                ? "bg-accent text-background"
                : "border border-border text-muted hover:bg-surface"
            }`}
          >
            {cat.label}
          </Link>
        ))}
      </div>

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={String(post._id)}
              title={post.title}
              description={post.description}
              slug={post.slug}
              thumbnail={post.thumbnail || "/images/welcomeImage2.jpg"}
              category={post.category}
              date={new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            />
          ))}
        </div>
      ) : (
        <p className="text-muted">
          No posts yet{category ? ` in "${category}"` : ""}. Stay tuned!
        </p>
      )}
    </main>
  );
}
