import Link from "next/link";
import { GithubIcon } from "@/icons/github";

const Header = () => {
  return (
    <header className="flex w-full p-5 py-3 justify-between text-sm text-gray-800 border-b border-zinc-200 bg-gray-50">
      {/*left section*/}
      <div className="flex space-x-4 items-center font-bold font-sansSerif text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <Link href="/">GPT Function Calling</Link>
      </div>

      {/*right section*/}
      <div className="flex space-x-4 items-center select-none">
        <a
          href="https://github.com/ekaone/gpt-function-calling"
          target="_blank"
          className="rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto"
        >
          <GithubIcon />
        </a>
      </div>
    </header>
  );
};

export default Header;
