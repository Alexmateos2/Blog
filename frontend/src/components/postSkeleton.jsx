//skeleton del post 
export function PostSkeleton() {
  return (
    <div className="md:w-2/3 w-full mx-auto">
      <div className="bg-gray-300 dark:bg-gray-700 rounded-2xl overflow-hidden flex flex-col animate-pulse mt-10 p-4">

        <div className="w-full pb-[56%] bg-gray-400 dark:bg-gray-600 rounded-lg mb-4" />
   
        <div className="h-8 bg-gray-400 dark:bg-gray-600 rounded mb-2 w-3/4" />
    
        <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded w-full mb-1" />
        <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded w-full mb-1" />
        <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded w-5/6 mb-4" />
      
        <div className="flex gap-4 justify-center mt-auto">
          <div className="h-8 w-24 bg-gray-400 dark:bg-gray-600 rounded-full" />
          <div className="h-8 w-24 bg-gray-400 dark:bg-gray-600 rounded-full" />
        </div>
      </div>
    </div>
  );
}
