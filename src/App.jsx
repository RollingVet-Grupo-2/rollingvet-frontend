import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarPageComponent from './components/common/NavbarComponent';
import FooterComponent from "./components/common/FooterComponent";
import "./App.css";
import PaginaContacto from "./components/views/PaginaContacto";
import Login from "./components/views/Login"
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
