import { connectDB } from "@/lib/db";
import Post from "@/models/Post";
import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  await connectDB();
  const { slug } = await params;
  const post = await Post.findOne({ slug, published: true }).lean();

  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | We Are Dreamers`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.thumbnail ? [post.thumbnail] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await connectDB();
  const { slug } = await params;

  const post = await Post.findOne({ slug, published: true }).lean();

  if (!post) notFound();

  const session = await auth();
  const isAdmin = !!session?.user;

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-16">
      {/* Back link + admin actions */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/blog"
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          &larr; Back to Blog
        </Link>
        {isAdmin && (
          <Link
            href={`/admin/editor/${post._id}`}
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-1.5 text-sm font-semibold text-background transition-colors hover:bg-accent-dark"
          >
            Edit Post
          </Link>
        )}
      </div>

      {/* Category & Date */}
      <div className="mb-4 flex items-center gap-3">
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold capitalize text-background">
          {post.category}
        </span>
        <time className="text-sm text-muted">
          {new Date(post.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>

      {/* Title */}
      <h1 className="mb-6 text-4xl font-bold leading-tight text-primary">
        {post.title}
      </h1>

      {/* Description */}
      <p className="mb-8 text-lg text-muted">{post.description}</p>

      {/* Thumbnail */}
      {post.thumbnail && (
        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
