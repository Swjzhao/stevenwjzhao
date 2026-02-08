import { NextRequest, NextResponse } from "next/server";
import getOpenAI from "@/lib/openai";
import cloudinary from "@/lib/cloudinary";

export async function POST(request: NextRequest) {
  const { prompt, title } = await request.json();

  if (!prompt || typeof prompt !== "string") {
    return NextResponse.json(
      { error: "prompt is required" },
      { status: 400 },
    );
  }

  const imagePrompt = `Create a modern, visually striking blog thumbnail image for a post about: ${title || prompt}. Style: clean, minimal, professional digital art with subtle gradients. No text or letters in the image.`;

  try {
    const response = await getOpenAI().images.generate({
      model: "dall-e-3",
      prompt: imagePrompt,
      n: 1,
      size: "1792x1024",
      quality: "standard",
    });

    const tempUrl = response.data?.[0]?.url;
    if (!tempUrl) {
      return NextResponse.json(
        { error: "No image URL returned from DALL-E" },
        { status: 502 },
      );
    }

    const uploadResult = await cloudinary.uploader.upload(tempUrl, {
      folder: "blog-thumbnails",
      quality: "auto",
      fetch_format: "auto",
    });

    return NextResponse.json({ url: uploadResult.secure_url });
  } catch (error) {
    console.error("Image generation error:", error);
    return NextResponse.json(
      { error: "Image generation failed" },
      { status: 502 },
    );
  }
}
