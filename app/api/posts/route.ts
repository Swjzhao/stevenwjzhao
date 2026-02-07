import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Post from "@/models/Post";
import slugify from "slugify";

// GET /api/posts - list posts
export async function GET(request: NextRequest) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const published = searchParams.get("published");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "12");

  const filter: Record<string, unknown> = {};
  if (category) filter.category = category;
  if (published !== null) filter.published = published !== "false";

  const skip = (page - 1) * limit;

  const [posts, total] = await Promise.all([
    Post.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    Post.countDocuments(filter),
  ]);

  return NextResponse.json({
    posts,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  });
}

// POST /api/posts - create post
export async function POST(request: NextRequest) {
  await connectDB();

  const body = await request.json();
  const { title, content, description, thumbnail, category, published } = body;

  if (!title || !content || !description || !category) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  let slug = slugify(title, { lower: true, strict: true });

  // Ensure unique slug
  const existing = await Post.findOne({ slug });
  if (existing) {
    slug = `${slug}-${Date.now()}`;
  }

  const post = await Post.create({
    title,
    slug,
    content,
    description,
    thumbnail: thumbnail || "",
    category,
    published: published ?? false,
  });

  return NextResponse.json(post, { status: 201 });
}
