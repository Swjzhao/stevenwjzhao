import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <Image
          src="/images/Logo-white-large.png"
          alt="We Are Dreamers"
          width={80}
          height={80}
          className="mx-auto mb-8"
        />
        <h1 className="mb-6 text-5xl font-bold leading-tight text-primary md:text-7xl">
          We Are Dreamers
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted md:text-xl">
          A community for young innovators, enthusiasts, entrepreneurs who think
          mediocre is not enough.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/blog"
            className="inline-flex h-12 items-center rounded-full bg-accent px-8 font-semibold text-background transition-colors hover:bg-accent-dark"
          >
            Read the Blog
          </Link>
          <Link
            href="/about"
            className="inline-flex h-12 items-center rounded-full border border-border px-8 font-medium text-primary transition-colors hover:bg-surface"
          >
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
}
