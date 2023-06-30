"use client";

import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { Space_Grotesk } from "next/font/google";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// components
import Loading from "@/components/Loading";
import Hero from "@/components/Hero";

export default function HackerNews() {
  const [loading, setLoading] = useState(false);

  const { messages, handleInputChange, handleSubmit } = useChat({
    onResponse: (response) => {
      if (response.status === 401) {
        console.log("Unauthorized");
        return;
      } else {
        console.log("Chat running");
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <>
      <div className="flex flex-col items-center pt-14 w-full px-4 md:px-0 max-w-screen-md">
        <Hero title={"Chat with hacker news"} />
      </div>
      {messages.length > 0
        ? messages.map((m) => (
            <div
              key={m.id}
              className={clsx(
                "flex w-full items-center justify-center border-b border-gray-200 py-8",
                m.role === "user" ? "bg-white" : "bg-gray-100"
              )}
            >
              <div className="flex w-full max-w-screen-md items-start space-x-4 px-5 sm:px-0">
                <div
                  key={m.id}
                  className={clsx(
                    "p-1.5 text-white",
                    m.role === "assistant" ? "bg-green-500" : "bg-black"
                  )}
                >
                  {m.role === "user" ? "User " : "AI: "}
                </div>
                <ReactMarkdown
                  className="prose mt-1 w-full break-words prose-p:leading-relaxed"
                  remarkPlugins={[remarkGfm]}
                  components={{
                    // open links in new tab
                    a: (props) => (
                      <a {...props} target="_blank" rel="noopener noreferrer" />
                    ),
                  }}
                >
                  {m.content}
                </ReactMarkdown>
              </div>
            </div>
          ))
        : null}
      <div className="fixed bottom-2 flex flex-col items-center pt-14 w-full px-4 md:px-0 max-w-screen-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white flex w-full mt-5 transition-all ease-linear hover:shadow-lg focus-within:shadow-lg rounded-full border border-[#6366f1] dark:border-[#6366f1] p-1.5 pl-5 items-center"
        >
          <MagnifyingGlassIcon className="h-5 mr-3 text-[#6366f1]" />
          <label htmlFor="search" className="sr-only"></label>
          <input
            type="text"
            className="flex-grow focus:outline-none text-gray-700"
            placeholder="What are you looking for?"
            id="search-box"
            onChange={handleInputChange}
          />
          <button
            className="border dark:border-zinc-600 w-10 h-10 rounded-full flex items-center justify-center bg-indigo-500"
            id="submit"
            aria-label="search-button"
          >
            <ArrowSmallRightIcon className="w-6 h-6 text-white" />
          </button>
        </form>

        <div className="flex w-full max-w-screen-md items-center justify-between mt-8 mb-2 ml-6">
          {loading && (
            <div>
              <Loading />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
