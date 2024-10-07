import { FastFetch } from "./FastFetch";
import { SlowFetch } from "./SlowFetch";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-8 items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <a
          href="https://www.learnwithjason.dev/blog/keep-async-await-from-blocking-execution/"
          className="text-blue-500 hover:text-blue-600"
        >
          Detailed blog post on this topic
        </a>

        <FastFetch />
        <SlowFetch />
      </main>
    </div>
  );
}
