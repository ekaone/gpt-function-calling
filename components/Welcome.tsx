import React from "react";

const examples = [
  "Chat Hacker News.",
  "Get Weather.",
  "Music Recomendation",
  "Ideas for a new startup",
  "Get a list startups",
];

function Welcome() {
  return (
    <div>
      <div className="border-gray-200sm:mx-0 rounded-md border sm:w-full">
        <div className="flex flex-col space-y-4 p-7 sm:p-10">
          <h1 className="text-lg font-semibold text-black">
            Welcome to Function Calling
          </h1>
          <p className="text-gray-500">
            This is an{" "}
            <a
              href="https://github.com/steven-tey/chathn"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 transition-colors hover:text-black"
            >
              open-source
            </a>{" "}
            AI chatbot that uses{" "}
            <a
              href="https://platform.openai.com/docs/guides/gpt/function-calling"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 transition-colors hover:text-black"
            >
              OpenAI Functions
            </a>{" "}
            and{" "}
            <a
              href="https://sdk.vercel.ai/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 transition-colors hover:text-black"
            >
              Vercel AI SDK
            </a>{" "}
            to interact with the{" "}
            <a
              href="https://github.com/HackerNews/API"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 transition-colors hover:text-black"
            >
              Hacker News API
            </a>{" "}
            with natural language.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-gray-200 bg-gray-50 p-7 sm:p-10">
          {examples.map((example, i) => (
            <div
              key={i}
              className="rounded-md border border-gray-200 bg-white px-5 py-3 text-left text-sm text-gray-500 transition-all duration-75 hover:border-black hover:text-gray-700 active:bg-gray-50"
            >
              {example}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Welcome;
