function SkeletonMovieCardUI() {
  return (
    <div className="flex gap-6 p-6 border rounded-lg shadow-md animate-pulse">
      {/* Poster Skeleton */}
      <div className="w-40 h-60 bg-gray-300 rounded-lg" />

      {/* Text Info Skeleton */}
      <div className="flex-1 space-y-4">
        <div className="h-6 bg-gray-300 rounded w-3/4" />
        <div className="h-5 bg-gray-300 rounded w-1/2" />
        <div className="h-5 bg-gray-300 rounded w-1/4" />
        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 rounded w-[85%]" />
        <div className="h-4 bg-gray-300 rounded w-[75%]" />
      </div>
    </div>
  );
}
export default SkeletonMovieCardUI;