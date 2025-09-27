// app/api/generate/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  // ✅ Live-code: API key guard
  // if (!process.env.OPENAI_API_KEY) {
  //   return NextResponse.json({ error: "Missing OPENAI_API_KEY" }, { status: 500 });
  // }

  // ✅ Live-code: basic destructure (defaults OK for demo)
  // const {
  //   jobDescription,
  //   resume = "",
  //   length = "standard",
  //   tone = "professional",
  // } = await req.json();

  // ✅ Live-code: quick validation
  // if (!jobDescription) {
  //   return NextResponse.json({ error: "Field 'jobDescription' is required" }, { status: 400 });
  // }

  // ✅ Live-code: map length/tone → style text (keep it simple here)
  // const lengthInstruction =
  //   length === "short" ? "Keep it to 3–4 sentences."
  //   : length === "minimal" ? "Use 2–3 sentences, no filler."
  //   : length === "elaborate" ? "Be detailed and persuasive."
  //   : "Write a professional, well-crafted letter.";
  //
  // const toneInstruction =
  //   tone === "startup" ? "Use tech-savvy startup lingo; 2–3 tight paragraphs."
  //   : tone === "executive" ? "Polished, senior-leadership tone."
  //   : tone === "creative" ? "Personality-forward, creative tone."
  //   : tone === "technical" ? "Emphasize hard skills and tools."
  //   : tone === "funny" ? "Light, witty; 1–2 short paragraphs."
  //   : "";

  // ✅ Live-code: build a single string input (Responses API friendly)
  // const inputText = [
  //   "You are an expert cover letter writer.",
  //   `Style:\n${[lengthInstruction, toneInstruction].filter(Boolean).join(" ")}`,
  //   `Job Description:\n${jobDescription}`,
  //   resume ? `Resume (use to tailor; don't copy verbatim):\n${resume}` : "",
  // ].filter(Boolean).join("\n\n");

  // ✅ Live-code: OpenAI call (Responses API)
  // const response = await openai.responses.create({
  //   model: "gpt-4o", // or "gpt-4.1-mini" depending on your tier
  //   instructions: "Follow the style. Return only the final cover-letter text.",
  //   input: inputText,
  //   temperature: 0.7,
  // });

  // ✅ Live-code: extract text (simplest path)
  // const text = response.output_text ?? "";
  // return NextResponse.json({ text });

  // Demo stub (remove when live-coding)
  return NextResponse.json({ text: "stub" });
}
