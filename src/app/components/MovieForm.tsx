'use client'

import { useState } from "react"
import { MovieType } from "../types/type";
import ExtractData from "../utils/ExtractData";
import SkeletonMovieCardUI from "./SkeletonMovieCardUi";

export default function MovieForm() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState<MovieType>();
  const [loadingState, setLoadingState] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoadingState(true);
    try {
      const movieName = name;
      const data = await fetch(`api/movie?title=${movieName}`);
      const rawdata = await data.json();
      const movieDetail: MovieType = ExtractData(rawdata);
      setDetails(movieDetail);
    } catch (error) {
      console.log("error  fetching movie  ", error);
    }
    setLoadingState(false);
  }

  return (
    <div className="w-full flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col sm:flex-row items-center gap-4 mb-8"
      >
        <input
          type="text"
          placeholder="Search for a movie..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 px-4 py-3 rounded-2xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition shadow"
        />
        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-2xl shadow-lg transition-all duration-200 w-full sm:w-auto"
        >
          Search
        </button>
      </form>
      <div className="w-full">
        {loadingState && <SkeletonMovieCardUI />}
        {details && !loadingState && (
          <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center border border-white/20 mt-4">
            <div className="flex-shrink-0 w-full md:w-40 flex justify-center">
              <img
                src={details.poster}
                alt={details.title}
                className="rounded-xl w-40 h-60 object-cover shadow-md border border-white/20 bg-white/10"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2 text-white">
              <h1 className="text-2xl font-bold text-emerald-300 mb-1">{details.title}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-200 mb-2">
                <span className="bg-emerald-700/30 px-3 py-1 rounded-full">Year: {details.year}</span>
                <span className="bg-emerald-700/30 px-3 py-1 rounded-full">Rating: {details.rating}</span>
                <span className="bg-emerald-700/30 px-3 py-1 rounded-full">IMDB: {details.imdbID}</span>
              </div>
              <p className="text-gray-200 mb-2"><span className="font-semibold text-emerald-400">Genre:</span> {details.genre}</p>
              <p className="text-gray-300 italic">{details.plot}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}