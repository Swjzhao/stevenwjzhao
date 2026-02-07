import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import Image from "next/image";
import Link from "next/link";

// Placeholder posts until database is wired up
const placeholderPosts = {
  tech: [
    {
      title: "Building a Modern Blog with Next.js 15",
      description:
        "A deep dive into building a performant blog using the latest Next.js features and App Router.",
      slug: "building-modern-blog-nextjs",
      thumbnail: "/images/welcomeImage2.jpg",
      category: "Tech",
      date: "Coming soon",
    },
  ],
  life: [],
  books: [],
};

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* Category Sections */}
      <CategorySection
        title="Tech"
        posts={placeholderPosts.tech}
        categorySlug="tech"
      />
      <CategorySection
        title="Life"
        posts={placeholderPosts.life}
        categorySlug="life"
      />
      <CategorySection
        title="Books"
        posts={placeholderPosts.books}
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
