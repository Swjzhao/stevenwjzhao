import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import Image from "next/image";
import Link from "next/link";
import { connectDB } from "@/lib/db";
import Post from "@/models/Post";

export const dynamic = "force-dynamic";

export default async function Home() {
  await connectDB();

  const allPosts = await Post.find({ published: true })
    .sort({ createdAt: -1 })
    .limit(9)
    .lean();

  const formatPosts = (posts: typeof allPosts) =>
    posts.map((p) => ({
      title: p.title,
      description: p.description,
      slug: p.slug,
      thumbnail: p.thumbnail || "/images/welcomeImage2.jpg",
      category: p.category.charAt(0).toUpperCase() + p.category.slice(1),
      date: new Date(p.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    }));

  const techPosts = formatPosts(
    allPosts.filter((p) => p.category === "tech").slice(0, 3),
  );
  const lifePosts = formatPosts(
    allPosts.filter((p) => p.category === "life").slice(0, 3),
  );
  const booksPosts = formatPosts(
    allPosts.filter((p) => p.category === "books").slice(0, 3),
  );

  return (
    <main>
      <HeroSection />

      <CategorySection title="Tech" posts={techPosts} categorySlug="tech" />
      <CategorySection title="Life" posts={lifePosts} categorySlug="life" />
      <CategorySection
        title="Books"
        posts={booksPosts}
        categorySlug="books"
      />

      {/* About Preview */}
      <section className="border-t border-border py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 md:flex-row">
          <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-full border-4 border-accent">
            <Image
              src="/images/IMG_20200918_202549.jpg"
              alt="Steven Zhao"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-3xl font-bold text-primary">
              Hi, I&apos;m Steven!
            </h2>
            <p className="mb-6 max-w-lg text-muted">
              A community for young innovators, enthusiasts, entrepreneurs who
              think mediocre is not enough. I aim to share my own experiences and
              road from 2x Google intern to CTO.
            </p>
            <Link
              href="/about"
              className="inline-flex h-10 items-center rounded-full border border-accent px-6 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
            >
              Learn more about me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
