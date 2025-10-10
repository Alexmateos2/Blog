import PostList from "../components/postList";
import { Link } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://back-blog-7adl.onrender.com/posts");
      const data = await response.json();

    
        setPosts(data);
        setLoading(false);
   
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="text-5xl xs:text-4xl sm:text-6xl mt-10 mx-auto text-center font-serif">
            <h1 className="text-5xl xs:text-4xl sm:text-5xl md:text-6xl dark:text-white">
              Bienvenido a Blocick.
            </h1>
          </div>

          <nav className="flex items-center justify-center mx-auto">
            <Link to="/new">
              <button className="bg-blue-500 hover:bg-blue-700 hover:shadow-md text-white font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out dark:bg-gray-500 dark:hover:bg-gray-700">
                Añadir post
              </button>
            </Link>
          </nav>

          <div className="max-w-7xl mx-auto mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 p-4">
              {loading
                ? Array.from({ length: 4 }).map((_, i) => (
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
                  ))
                : <PostList posts={posts} fetchPosts={fetchPosts} />}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
