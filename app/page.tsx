"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import { Space_Grotesk } from "next/font/google";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [additionalFeature, setAdditionalFeature] = useState(false);
  const [generatedTitles, setGeneratedTitles] = useState("");
  const [text, setText] = useState("");

  return (
    <>
      <div className={`flex flex-col items-center m-0 `}>
        <Head>
          <title>GPT Function Calling</title>
          <meta
            name="description"
            content="Using Idea Generator can help you get over writer's block. Do you have an idea of where to start? Generate your idea with ease."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        {/*body*/}
        <div className="flex flex-col items-center pt-14 w-full px-4 md:px-0 max-w-screen-md">
          <h1
            className={`${spaceGrotesk.className} text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-gray-900 sm:leading-9 sm:truncate mb-2 text-center sm:text-4xl lg:text-6xl xl:text-6xl`}
          >
            GPT Function Calling
          </h1>
          <form
            onSubmit={(e) => e}
            className="flex w-full mt-5 transition-all ease-linear hover:shadow-lg focus-within:shadow-lg  rounded-full border border-[#6366f1] dark:border-[#6366f1] p-1.5 pl-5 items-center"
          >
            <MagnifyingGlassIcon className="h-5 mr-3 text-[#6366f1] dark:text-gray-100" />
            <label htmlFor="search" className="sr-only"></label>
            <input
              type="text"
              className="flex-grow focus:outline-none dark:text-white bg-transparent text-gray-700"
              placeholder="Call a function"
              id="search-box"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 animate-spin text-black-600 dark:text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
