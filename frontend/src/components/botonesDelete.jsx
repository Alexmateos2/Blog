export function BotonesDelete ({ borrar, setBorrar, handleDelete}) {
    return(
        <>
          {borrar ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-4"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none  dark:bg-cyan-900' >
                <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t dark:bg-cyan-900'>
                  <h3 className="text-3xl font-semibold mt-4  dark:text-white/80">
                  ¿Seguro que quieres borrar este post?
                  </h3>
                </div>
                <div className="flex items-center justify-center p-6  border-solid border-slate-200 rounded-b mt-7">
                <button
                    className="bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setBorrar(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleDelete}
                  >
                    Borrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </>
    )
}