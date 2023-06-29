import { NextResponse } from "next/server";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY environment variable is not defined.");
}

export async function POST(req: Request) {
  const { messages } = await req.json();

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(NextResponse.json({ messages }, { status: 200 }));
    }, 3000)
  );
}
