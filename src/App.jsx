import "bootstrap/dist/css/bootstrap.min.css";
import NavbarPageComponent from './components/common/NavbarComponent';
import Inicio from './components/views/Inicio';
import FooterComponent from "./components/common/FooterComponent";
import Error404 from "./components/views/Error404";
import "./App.css";
import PaginaContacto from "./components/views/PaginaContacto";
function App() {

  return (
    <>
    <NavbarPageComponent></NavbarPageComponent>
    <Inicio></Inicio>
    {/* <Error404></Error404> */}
    {/* <PaginaContacto></PaginaContacto> */}
    <FooterComponent></FooterComponent>
    </>
  )
}

export default App
