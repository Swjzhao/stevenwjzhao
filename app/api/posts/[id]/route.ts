import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Post from "@/models/Post";
import slugify from "slugify";

// GET /api/posts/[id] - get single post (by id or slug)
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  await connectDB();
  const { id } = await params;

  const post = await Post.findOne({
    $or: [{ slug: id }, ...(id.match(/^[0-9a-fA-F]{24}$/) ? [{ _id: id }] : [])],
  }).lean();

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}

// PATCH /api/posts/[id] - update post
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  await connectDB();
  const { id } = await params;
  const body = await request.json();

  const updateData: Record<string, unknown> = {};

  if (body.title !== undefined) {
    updateData.title = body.title;
    updateData.slug = slugify(body.title, { lower: true, strict: true });
  }
  if (body.content !== undefined) updateData.content = body.content;
  if (body.description !== undefined) updateData.description = body.description;
  if (body.thumbnail !== undefined) updateData.thumbnail = body.thumbnail;
  if (body.category !== undefined) updateData.category = body.category;
  if (body.published !== undefined) updateData.published = body.published;

  const post = await Post.findByIdAndUpdate(id, updateData, { new: true });

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}

// DELETE /api/posts/[id] - delete post
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  await connectDB();
  const { id } = await params;

  const post = await Post.findByIdAndDelete(id);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Post deleted" });
}
