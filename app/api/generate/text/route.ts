import { NextRequest, NextResponse } from "next/server";
import getAnthropic from "@/lib/anthropic";

const VALID_CATEGORIES = ["tech", "life", "books"] as const;

export async function POST(request: NextRequest) {
  const { prompt } = await request.json();

  if (!prompt || typeof prompt !== "string") {
    return NextResponse.json(
      { error: "prompt is required" },
      { status: 400 },
    );
  }

  try {
    const message = await getAnthropic().messages.create({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: `You are a blog content generator for a personal blog called "We Are Still Dreamers". The blog covers tech, life, and books topics. The author is Steven, a software engineer.

Write a blog post about the following topic: ${prompt}

Return ONLY valid JSON (no markdown fences, no extra text) with this exact structure:
{
  "title": "A compelling blog post title",
  "description": "A brief 1-2 sentence description for SEO and post cards (max 200 chars)",
  "category": "tech" or "life" or "books",
  "content": "<h2>...</h2><p>...</p>..."
}

Rules for the content field:
- Use semantic HTML tags: h2, h3, p, ul, li, ol, blockquote, code, pre, strong, em
- Do NOT use h1 (the title is rendered separately)
- Write 800-1500 words of thoughtful, engaging content
- Use a conversational but knowledgeable tone
- Include practical examples or insights where relevant
- Break content into sections with h2/h3 headings
- The content must be valid HTML that TipTap rich text editor can render`,
        },
      ],
    });

    const text =
      message.content[0].type === "text" ? message.content[0].text : "";

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { error: "Failed to parse AI response as JSON" },
        { status: 502 },
      );
    }

    if (!parsed.title || !parsed.description || !parsed.content) {
      return NextResponse.json(
        { error: "AI response missing required fields" },
        { status: 502 },
      );
    }

    if (!VALID_CATEGORIES.includes(parsed.category)) {
      parsed.category = "tech";
    }

    return NextResponse.json({
      title: parsed.title,
      description: parsed.description,
      category: parsed.category,
      content: parsed.content,
    });
  } catch (error) {
    console.error("Text generation error:", error);
    return NextResponse.json(
      { error: "Text generation failed" },
      { status: 502 },
    );
  }
}
