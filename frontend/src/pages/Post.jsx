import { FaRegClock } from 'react-icons/fa';
import { Header } from '../components/header';
import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BotonesDelete } from '../components/botonesDelete';
import { useDropzone } from 'react-dropzone';
import { Footer } from '../components/footer';
import { PostSkeleton } from '../components/postSkeleton';

export function EntradaBlog() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [datosUser, setDatosUser] = useState(null);
  const [editarButton, setEditarButton] = useState(false);
  const [borrar, setBorrar] = useState(false);
  const [nuevaImagen, setNuevaImagen] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBorrarChange = () => setBorrar(true);

  const handleDelete = () => {
    fetch(`https://back-blog-7adl.onrender.com/delete/${id}?imagen=${datosUser?.imagen}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) throw new Error('Error al eliminar el post');
        toast.success('Post eliminado con éxito');
        navigate('/');
      })
      .catch((error) => console.error('Error al eliminar el post:', error));
    setBorrar(false);
  };

  const fetchDatos = useCallback(async () => {
    let showLoading = false;

    const loadingTimeout = setTimeout(() => {
      showLoading = true;
      setLoading(true);
    }, 200);

    try {
      const response = await fetch(`https://back-blog-7adl.onrender.com/post/${id}`);
      const data = await response.json();
      setDatosUser(Array.isArray(data) ? data[0] : data);
    } catch (error) {
      console.error(error);
    } finally {
      clearTimeout(loadingTimeout);
      if (showLoading) setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDatos();
  }, [fetchDatos]);

  const handleEditar = () => setEditarButton(true);

  const handleGuardar = () => {
    if (!datosUser?.contenido || datosUser.contenido.length < 200) {
      toast.error('El contenido debe tener al menos 200 caracteres');
      return;
    }

    const formData = new FormData();
    formData.append('titulo', datosUser.titulo || '');
    formData.append('contenido', datosUser.contenido || '');
    if (nuevaImagen) {
      formData.append('imagen', nuevaImagen);
      formData.append('imagenAnterior', datosUser.imagen);
    } else {
      formData.append('imagenAnterior', datosUser.imagen);
    }

    fetch(`https://back-blog-7adl.onrender.com/postEdited/${id}`, {
      method: 'PUT',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) throw new Error('Error al guardar los cambios');
        toast.success('Cambios guardados con éxito!');
        setEditarButton(false);
        setNuevaImagen(null);
        fetchDatos();
      })
      .catch((error) => {
        console.error(error);
        toast.error('Error al guardar los cambios');
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatosUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles?.length > 0) setNuevaImagen(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

  if (loading) return <PostSkeleton />;
  if (!datosUser) return null;

  return (
    <>
      <Header />
      <div className="w-full px-4 md:px-6">
        {/* Título */}
        <div className="text-3xl sm:text-6xl mt-10 text-center font-serif p-4">
          <h2 className="dark:text-white/80">
            {editarButton ? (
              <input
                type="text"
                value={datosUser.titulo || ''}
                onChange={handleInputChange}
                maxLength={60}
                className="bg-transparent border-b border-gray-400 focus:outline-none w-full md:w-11/12 lg:w-10/12 mx-auto block"
                name="titulo"
              />
            ) : (
              datosUser.titulo || ''
            )}
          </h2>
        </div>

        {/* Fecha */}
        <div className="flex gap-2 items-center justify-center mt-6 mb-3 text-gray-900">
          {datosUser.fecha && (
            <p className="text-sm font-semibold text-gray-500 text-opacity-80 dark:text-white/80">
              {new Date(datosUser.fecha).toLocaleString()}
            </p>
          )}
          <FaRegClock className="text-gray-500 dark:text-white/80" />
        </div>

        {/* Imagen */}
        <div className="w-full mx-auto">
          {editarButton ? (
            <div
              {...getRootProps()}
              className={`mx-auto flex justify-center items-center mt-4 border cursor-pointer rounded-sm p-16 w-full border-gray-400 ${
                isDragActive ? 'bg-gray-100' : ''
              }`}
            >
              <input {...getInputProps()} name="imagen" />
              {nuevaImagen ? (
                <img
                  src={URL.createObjectURL(nuevaImagen)}
                  alt="Nueva imagen"
                  className="mx-auto rounded-lg w-full sm:max-w-sm md:max-w-md lg:max-w-lg p-6"
                  style={{ maxHeight: '500px' }}
                />
              ) : (
                <img
                  src={`${process.env.PUBLIC_URL}/imagenes/${datosUser.imagen}`}
                  alt="Imagen original"
                  className="mx-auto rounded-lg w-full sm:max-w-sm md:max-w-md lg:max-w-lg p-4"
                  style={{ maxHeight: '500px' }}
                />
              )}
            </div>
          ) : (
            <img
              src={`${process.env.PUBLIC_URL}/imagenes/${datosUser.imagen}`}
              alt="imagen"
              className="mx-auto rounded-lg w-full sm:max-w-sm md:max-w-md lg:max-w-lg p-3 px-6"
              style={{ maxHeight: '500px' }}
            />
          )}
        </div>

        {/* Contenido mejorado con caja */}
<div className="mt-10">
  {editarButton ? (
    <textarea
      className="w-full max-w-6xl mx-auto block border border-gray-400 rounded px-4 py-2 dark:bg-cyan-900 dark:text-white/80 text-lg leading-relaxed"
      value={datosUser.contenido || ''}
      name="contenido"
      minLength={200}
      onChange={handleInputChange}
      placeholder="Ingresa el contenido..."
      cols="30"
      rows="10"
    />
  ) : (
    <div className="mx-auto w-full max-w-6xl text-lg leading-relaxed px-6 py-6 shadow-md bg-slate-50 border border-slate-300 rounded-lg dark:bg-cyan-900 dark:text-white/80">
      {datosUser.contenido.split("\n").map((linea, i) => (
        <p key={i} className="mb-4">
          {linea}
        </p>
      ))}
    </div>
  )}
</div>

        {/* Botones */}
        <div className="mb-6 flex gap-4 justify-center">
          <button
            className={`bg-gray-400 hover:shadow-lg text-white font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out w-32 ${
              editarButton ? '' : 'hover:bg-gray-500'
            }`}
            onClick={handleEditar}
            disabled={editarButton}
          >
            Editar
          </button>
          {editarButton && (
            <button
              className="bg-green-600 hover:bg-green-700 hover:shadow-md text-white font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out w-32"
              onClick={handleGuardar}
            >
              Guardar
            </button>
          )}
          <button
            className="bg-gray-600 hover:bg-red-700 hover:shadow-md text-white font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out w-32"
            onClick={handleBorrarChange}
          >
            Borrar
          </button>
        </div>

        <BotonesDelete borrar={borrar} setBorrar={setBorrar} handleDelete={handleDelete} />
      </div>
      <Footer />
    </>
  );
}
