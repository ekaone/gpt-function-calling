"use client";

import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="fixed text-center text-sm border-t border-slate-200 sm:h-15 sm:py-2 py-2 px-5 space-y-2 sm:mb-0 bottom-0 w-full bg-gray-50">
      <div className="flex w-fit flex-wrap items-center justify-center gap-1 text-center m-auto">
        Powered by{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline underline-offset-2"
        >
          Next.js{", "}
        </a>
        <a
          href="https://sdk.vercel.ai/docs"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline underline-offset-2"
        >
          Vercel AI
        </a>
        {" and"}
        <a
          href="https://openai.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline underline-offset-2"
        >
          Open AI
        </a>
      </div>
    </footer>
  );
}
