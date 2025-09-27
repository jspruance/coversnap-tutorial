import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: "Missing OPENAI_API_KEY" }, { status: 500 });
  }

  const { jobDescription, resume = "", length = "standard", tone = "professional" } = await req.json();

  if (!jobDescription) {
    return NextResponse.json({ error: "Field 'jobDescription' is required" }, { status: 400 });
  }

  const response = await openai.responses.create({
    model: "gpt-4o", // or "gpt-4.1-mini", "gpt-5" depending on your tier
    instructions: "Follow the style. Return only the final cover-letter text.",
    input: "write a 3-4 sentence sample cover letter",
    temperature: 0.7,
  });

  const text = response.output_text ?? "";
  return NextResponse.json({ text });
}
