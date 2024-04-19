import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Inicio from "./page/Inicio";
import Login from "./page/Login";
import Especialidades from "./page/Especialidades";
import Servicios from "./page/Servicios";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Inicio />} />
        <Route path={"/especialidades"} element={<Especialidades />} />
        <Route path={"/servicios"} element={<Servicios />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
