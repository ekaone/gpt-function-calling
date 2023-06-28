"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import { Space_Grotesk } from "next/font/google";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

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
            content="Using Function Calling can help you get over writer's block. Do you have an idea of where to start? Call your idea with ease."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        {/*body*/}
        <div className="flex w-full items-center justify-center py-8">
          thread here
        </div>

        <div className="fixed bottom-2 flex flex-col items-center pt-14 w-full px-4 md:px-0 max-w-screen-md">
          <form
            onSubmit={(e) => e}
            className="bg-white flex w-full mt-5 transition-all ease-linear hover:shadow-lg focus-within:shadow-lg rounded-full border border-[#6366f1] dark:border-[#6366f1] p-1.5 pl-5 items-center"
          >
            <MagnifyingGlassIcon className="h-5 mr-3 text-[#6366f1] dark:text-gray-100" />
            <label htmlFor="search" className="sr-only"></label>
            <input
              type="text"
              className="flex-grow focus:outline-none dark:text-white text-gray-700"
              placeholder="What are you looking for?"
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
                <Loading />
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
