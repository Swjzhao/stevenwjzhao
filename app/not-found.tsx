import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="mb-4 text-6xl font-bold text-accent">404</h1>
      <p className="mb-8 text-lg text-muted">Page not found</p>
      <Link
        href="/"
        className="inline-flex h-10 items-center rounded-full bg-accent px-6 font-semibold text-background transition-colors hover:bg-accent-dark"
      >
        Go Home
      </Link>
    </main>
  );
}
