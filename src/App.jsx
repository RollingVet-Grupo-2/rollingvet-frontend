import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import AdminPrincipal from "./components/views/AdminPrincipal";
import NavbarPageComponent from "./components/common/NavbarComponent";
import Inicio from "./components/views/Inicio";
import FooterComponent from "./components/common/FooterComponent";
import Error404 from "./components/views/Error404";
import "./App.css";
import PaginaContacto from "./components/views/PaginaContacto";
import Login from "./components/views/Login";
function App() {
  return (
    <>
      <NavbarPageComponent></NavbarPageComponent>
      <Login></Login>
      {/*<AdminPrincipal />*/}
      {/* <Inicio></Inicio> */}
      {/* <Error404></Error404> */}
      {/*<PaginaContacto></PaginaContacto>*/}
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;