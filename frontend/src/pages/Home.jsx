import PostList from "../components/postList";
import { HomeSkeleton } from "../components/homeSkeleton"
import { Link } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(false);
const fetchPosts = async () => {
  setShowSkeleton(false);

  const skeletonTimeout = setTimeout(() => setShowSkeleton(true), 200);

  try {
    const response = await fetch("https://back-blog-7adl.onrender.com/posts");
    const data = await response.json();

    

    setPosts(data);
  } catch (error) {
    console.error("Error fetching posts:", error);
  } finally {
    clearTimeout(skeletonTimeout);
    setShowSkeleton(false);
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
              {showSkeleton ? (
                <HomeSkeleton count={4} />
              ) : (
                <PostList posts={posts} fetchPosts={fetchPosts} />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
