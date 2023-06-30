"use client";

import { useState } from "react";
import { Message } from "ai/react";
import { useChat } from "ai/react";
import { ChatRequest, FunctionCallHandler, nanoid } from "ai";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

// components
import Loading from "@/components/Loading";
import Hero from "@/components/Hero";

export default function FunctionCalling() {
  const [loading, setLoading] = useState(false);

  const functionCallHandler: FunctionCallHandler = async (
    chatMessages,
    functionCall
  ) => {
    if (functionCall.name === "get_current_weather") {
      if (functionCall.arguments) {
        const parsedFunctionCallArguments = JSON.parse(functionCall.arguments);
        // You now have access to the parsed arguments here (assuming the JSON was valid)
        // If JSON is invalid, return an appropriate message to the model so that it may retry?
        console.log(parsedFunctionCallArguments);
      }

      // Generate a fake temperature
      const temperature = Math.floor(Math.random() * (100 - 30 + 1) + 30);
      // Generate random weather condition
      const weather = ["sunny", "cloudy", "rainy", "snowy"][
        Math.floor(Math.random() * 4)
      ];

      const functionResponse: ChatRequest = {
        messages: [
          ...chatMessages,
          {
            id: nanoid(),
            name: "get_current_weather",
            role: "function" as const,
            content: JSON.stringify({
              temperature,
              weather,
              info: "This data is randomly generated and came from a fake weather API!",
            }),
          },
        ],
      };
      return functionResponse;
    } else if (functionCall.name === "get_current_time") {
      const time = new Date().toLocaleTimeString();
      const functionResponse: ChatRequest = {
        messages: [
          ...chatMessages,
          {
            id: nanoid(),
            name: "get_current_time",
            role: "function" as const,
            content: JSON.stringify({ time }),
          },
        ],
        // You can also (optionally) return a list of functions here that the model can call next
        // functions
      };

      return functionResponse;
    } else if (functionCall.name === "eval_code_in_browser") {
      if (functionCall.arguments) {
        // Parsing here does not always work since it seems that some characters in generated code aren't escaped properly.
        const parsedFunctionCallArguments: { code: string } = JSON.parse(
          functionCall.arguments
        );
        const functionResponse = {
          messages: [
            ...chatMessages,
            {
              id: nanoid(),
              name: "eval_code_in_browser",
              role: "function" as const,
              content: JSON.stringify(eval(parsedFunctionCallArguments.code)),
            },
          ],
        };
        return functionResponse;
      }
    }
  };

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/function-calling",
    experimental_onFunctionCall: functionCallHandler,
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

  // Generate a map of message role to text color
  const roleToColorMap: Record<Message["role"], string> = {
    system: "red",
    user: "black",
    function: "blue",
    assistant: "green",
  };

  const getRenderedMessage = (m: Message) => {
    if (m.content === "" && m.function_call !== undefined) {
      const functionCallString =
        typeof m.function_call === "string"
          ? m.function_call
          : JSON.stringify(m.function_call);
      return (
        <>
          {functionCallString.split("\\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </>
      );
    } else {
      return m.content;
    }
  };

  return (
    <>
      <div className="flex flex-col items-center pt-14 w-full px-4 md:px-0 max-w-screen-md">
        <Hero title={"Chat Function Calling"} />
      </div>
      {messages.length > 0
        ? messages.map((m) => (
            <div
              key={m.id}
              className="whitespace-pre-wrap"
              style={{ color: roleToColorMap[m.role] }}
            >
              <strong>{`${m.role}: `}</strong>
              {getRenderedMessage(m)}
              <br />
              <br />
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
            className="border w-10 h-10 rounded-full flex items-center justify-center bg-indigo-500"
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
