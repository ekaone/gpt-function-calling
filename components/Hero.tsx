import React from "react";

function Hero({ title }: { title: string }) {
  return (
    <div>
      <div className="border-gray-200sm:mx-0 rounded-md border sm:w-full">
        <div className="flex flex-col space-y-4 p-7 sm:p-10">
          <h1 className="text-lg font-semibold text-black">{title}</h1>
          <p className="text-gray-500">
            This is an{" "}
            <a
              href="https://github.com/ekaone/gpt-function-calling"
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
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
