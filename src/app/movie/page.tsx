'use client'
import { useRouter } from "next/navigation"
import MovieForm from "../components/MovieForm";

export default function Movie() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-2 py-6 md:px-4">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-8 border border-white/20 flex flex-col items-center">
        <button
          className="self-start mb-4 md:mb-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-full shadow transition-all duration-200 text-sm md:text-base"
          onClick={() => router.push('/')}
        >
          ← Back
        </button>
        <h2 className="text-xl md:text-2xl font-bold text-emerald-400 mb-4 md:mb-6 text-center">Search for a Movie</h2>
        <MovieForm />
      </div>
    </div>
  )
}