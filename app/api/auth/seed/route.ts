import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

// POST /api/auth/seed - create admin user (one-time setup)
export async function POST(request: Request) {
  await connectDB();

  const { email, password, name } = await request.json();

  if (!email || !password || !name) {
    return NextResponse.json(
      { error: "Email, password, and name are required" },
      { status: 400 },
    );
  }

  const existing = await User.findOne({ email });
  if (existing) {
    return NextResponse.json(
      { error: "User already exists" },
      { status: 409 },
    );
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    email,
    password: hashedPassword,
    name,
    role: "admin",
  });

  return NextResponse.json(
    { message: "Admin user created", id: user._id },
    { status: 201 },
  );
}
