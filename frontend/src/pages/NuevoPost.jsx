import { Header } from "../components/header";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export function NuevoPosts() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleGuardarFetch = async (e) => {
    e.preventDefault();

    if (titulo !== '' && contenido !== '') {
      try {
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('contenido', contenido);
        formData.append('imagen', imagen);

        const response = await fetch('http://localhost:3000/nuevoPost', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          toast.success("Post creado con éxito");
          navigate("/");
        }
      } catch (error) {
        toast.error('Error en la solicitud');
      }
    } else {
      toast.error('Titulo o contenido vacío');
    }
  };

  const handleImagenChange = (e) => {
    setImagen(e.target.files[0]);
  };

  return (
    <>
      <Header />

      <div className="text-5xl sm:text-6xl mt-10 mx-auto text-center font-serif">
        Nuevo post
      </div>
      <div className="flex justify-center items-center mt-12">
        <div className="w-full max-w-6xl">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" encType="multipart/form-data">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="titulo">
                Titulo*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="titulo"
                type="text"
                placeholder="Inserta un titulo del post"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="texto">
                Contenido del post*
              </label>

              <textarea
                name="text"
                id=""
                cols="30"
                rows="10"
                placeholder="Escribe tu post!"
                className="shadow w-full rounded border text-gray-700 focus:outline-none py-2 px-3"
                value={contenido}
                onChange={(e) => setContenido(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">
                Imagen de portada*
              </label>
              <input
                accept="image/*"
                type="file"
                className="w-full text-md sm:text-lg"
                onChange={handleImagenChange}
              />
            </div>
            <div className="flex justify-center gap-2">
              <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out w-1/4">
                Previsualizar
              </button>
              <button
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out w-1/4"
                onClick={handleGuardarFetch}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
