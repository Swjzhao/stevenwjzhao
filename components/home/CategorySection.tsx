import Link from "next/link";
import PostCard from "./PostCard";

interface Post {
  title: string;
  description: string;
  slug: string;
  thumbnail: string;
  category: string;
  date: string;
}

interface CategorySectionProps {
  title: string;
  posts: Post[];
  categorySlug: string;
}

export default function CategorySection({
  title,
  posts,
  categorySlug,
}: CategorySectionProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-primary">{title}</h2>
          <Link
            href={`/blog?category=${categorySlug}`}
            className="text-sm font-medium text-accent transition-colors hover:text-accent-dark"
          >
            View all &rarr;
          </Link>
        </div>
        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <p className="text-muted">No posts yet. Stay tuned!</p>
        )}
      </div>
    </section>
  );
}
