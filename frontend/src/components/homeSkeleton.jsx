//skeleton de Home
export function HomeSkeleton({ count = 4 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <article
          key={i}
          className="bg-gray-300 dark:bg-gray-700 rounded-2xl overflow-hidden flex flex-col animate-pulse"
        >
          <div className="w-full pb-[100%] bg-gray-400 dark:bg-gray-600" />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div className="h-6 bg-gray-400 dark:bg-gray-600 rounded mb-2 w-3/4" />
            <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded w-full mb-1" />
            <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded w-full mb-1" />
            <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded w-5/6" />
          </div>
          <div className="p-4 flex justify-center">
            <div className="h-8 w-12 bg-gray-400 dark:bg-gray-600 rounded-full" />
          </div>
        </article>
      ))}
    </>
  );
}
