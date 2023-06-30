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
import { Type } from "typescript";

const spaceGrotesk = Space_Grotesk({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});

const initialMessages = [
  { role: "system", content: "You are a helpful assistant." },
  { role: "user", content: "Who won the world series in 2020?" },
  {
    role: "assistant",
    content: "The Los Angeles Dodgers won the World Series in 2020.",
  },
  { role: "user", content: "Where was it played?" },
];

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const {
    messages,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    isLoading,
  } = useChat({
    //@ts-ignore
    initialMessages,
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
