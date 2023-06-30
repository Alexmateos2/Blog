import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { NuevoPosts } from "./pages/NuevoPost";
import { EntradaBlog } from "./pages/Post";
import { ToastContainer } from "react-toastify";
export function  App (){
    return(
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/new" element={<NuevoPosts />} />
      <Route path ="/post/:id" element= {<EntradaBlog />} />
    </Routes>
  </BrowserRouter>
  )
}