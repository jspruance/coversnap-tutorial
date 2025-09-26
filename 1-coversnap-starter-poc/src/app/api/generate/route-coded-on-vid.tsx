// app/api/generate/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  // ✅ Live-code this guard
  // if (!process.env.OPENAI_API_KEY) {
  //   return NextResponse.json({ error: "Missing OPENAI_API_KEY" }, { status: 500 });
  // }

  // ✅ Live-code this destructure
  // const { jobDescription, resume = "", length = "standard", tone = "professional" } = await req.json();

  // ✅ Live-code messages (start simple, then add resume)
  // const messages = [
  //   { role: "system", content: "You are an expert cover letter writer." },
  //   { role: "user", content: `Job Description:\n${jobDescription}` },
  // ];

  // ✅ Live-code the OpenAI call
  // const completion = await openai.chat.completions.create({
  //   model: "gpt-4o",
  //   messages,
  //   temperature: 0.7,
  // });

  // const text = completion.choices?.[0]?.message?.content ?? "";
  // return NextResponse.json({ text });

  return NextResponse.json({ text: "stub" });
}
