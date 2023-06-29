"use client";

import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { Space_Grotesk } from "next/font/google";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Welcome from "@/components/Welcome";

const spaceGrotesk = Space_Grotesk({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, input, setInput, handleSubmit, isLoading } = useChat({
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

  const disabled = isLoading || !input;

  const [loading, setLoading] = useState(false);
  const [additionalFeature, setAdditionalFeature] = useState(false);
  const [generatedTitles, setGeneratedTitles] = useState("");
  const [text, setText] = useState("");

  return (
    <>
      <Head>
        <title>GPT Function Calling</title>
        <meta
          name="description"
          content="Using Function Calling can help you get over writer's block. Do you have an idea of where to start? Call your idea with ease."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*body*/}
      <div className="flex flex-col items-center pt-14 w-full px-4 md:px-0 max-w-screen-md">
        <Welcome />
      </div>
    </>
  );
}
