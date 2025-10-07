import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { toast } from "react-toastify";
import { BotonesDelete } from "./botonesDelete";

const Post = ({ post, fetchPosts }) => {
  const [borrar, setBorrar] = useState(false);

  const handleBorrarChange = () => setBorrar(true);

  const handleDelete = () => {
    fetch(
      `https://back-blog-7adl.onrender.com/delete/${post.id}?imagen=${post.imagen}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al eliminar el post");
        }
        toast.success("Post eliminado con éxito!");
        fetchPosts();
      })
      .catch((error) => {
        console.error("Error al eliminar el post:", error);
      });

    setBorrar(false);
  };

  const contenido = post.contenido.substring(0, 150);

  return (
    <article className="bg-white rounded-2xl p-4 dark:bg-cyan-900 dark:text-white/80 shadow-md flex flex-col h-full">
      {/* Título */}
      <div className="h-24 flex justify-center items-center p-2">
        <Link to={`/post/${post.id}`}>
          <h2
            className="font-bold text-center sm:mt-2 text-2xl md:text-xl p-4 transition duration-200 ease-in-out mb-4 transform hover:scale-105 
             line-clamp-4 sm:line-clamp-4 md:line-clamp-2"
          >
            {post.titulo}
          </h2>
        </Link>
      </div>

      {/* Fecha */}
      <div className="flex gap-2 items-center justify-center mt-2 sm:mt-0 p-4">
        <p className="text-opacity-50 text-sm text-gray-500 font-semibold dark:text-white/60">
          {new Date(post.fecha).toLocaleString()}
        </p>
        <FaRegClock className="text-gray-500 dark:text-white/60" />
      </div>

      {/* Imagen */}
      <div className="pt-4 w-full">
        <Link to={`/post/${post.id}`}>
          <div className="mx-auto rounded-xl overflow-hidden aspect-[16/9]">
            <img
              src={`${process.env.PUBLIC_URL}/imagenes/${post.imagen}`}
              alt="imagen"
              className="h-full w-full object-cover transition duration-300 ease-in-out transform hover:scale-110"
              loading="lazy"
            />
          </div>
        </Link>
      </div>

      {/* Contenido */}
      <div className="flex-1 overflow-hidden px-4 mt-4">
        <p className="text-justify text-base leading-relaxed line-clamp-4">
          {contenido}...
        </p>
      </div>

      {/* Botón eliminar */}
      <div className="text-center mt-6">
        <button
          className="bg-transparent rounded-lg py-2 px-4 transition duration-300 ease-in-out transform hover:scale-125 hover:text-red-500"
          onClick={handleBorrarChange}
        >
          <FaRegTrashAlt className="text-3xl" />
        </button>
      </div>

      <BotonesDelete
        borrar={borrar}
        setBorrar={setBorrar}
        handleDelete={handleDelete}
      />
    </article>
  );
};

export default Post;
