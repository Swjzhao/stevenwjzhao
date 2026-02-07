import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  title: string;
  description: string;
  slug: string;
  thumbnail: string;
  category: string;
  date: string;
}

export default function PostCard({
  title,
  description,
  slug,
  thumbnail,
  category,
  date,
}: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-accent/30">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-background">
            {category}
          </span>
        </div>
        <div className="p-5">
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-primary transition-colors group-hover:text-accent">
            {title}
          </h3>
          <p className="mb-3 line-clamp-2 text-sm text-muted">{description}</p>
          <time className="text-xs text-muted">{date}</time>
        </div>
      </article>
    </Link>
  );
}
