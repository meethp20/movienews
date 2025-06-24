'use client'
import { useRouter } from "next/navigation"
import { Github } from "lucide-react";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full flex items-center justify-center gap-8 py-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-emerald-400 drop-shadow">MovieFinder</h1>
        <a
          href="https://github.com/meethp20"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-200 hover:text-emerald-400 transition"
        >
          <Github size={28} />
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <div className="flex flex-col gap-6 w-full max-w-3xl px-4 items-center">
          {/* Cards Row */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {/* Card 1 */}
            <div className=" hover:scale-115 hover:bg-white/25 transition flex-1 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 flex items-center justify-center min-h-[160px] text-center border border-white/20">
              <span className="text-lg text-gray-200 font-medium">
                Instantly discover details about any movie you love, from classics to the latest blockbusters.
              </span>
            </div>
            {/* Card 2 */}
            <div className="flex-1 hover:scale-115 hover:bg-white/25 transition bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 flex items-center justify-center min-h-[160px] text-center border border-white/20">
              <span className="text-lg text-gray-200 font-medium">
                Fast, reliable, and beautifully simple. No sign-up, no hassle—just search and enjoy!
              </span>
            </div>
          </div>
          {/* Button below cards */}
          <button
            onClick={() => router.push('/movie')}
            className="bg-emerald-500 hover:cursor-pointer hover:scale-105 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all duration-200 w-full md:w-auto mt-2"
            style={{ minHeight: 64 }}
          >
            Get started
          </button>
        </div>
      </main>
    </div>
  );
}