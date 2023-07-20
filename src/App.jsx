import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarPageComponent from './components/common/NavbarComponent';
import FooterComponent from "./components/common/FooterComponent";
import AcercaDeNosotros from "./components/views/AcercaDeNosotros";
function App() {

  return (
    <>
    <NavbarPageComponent></NavbarPageComponent>
    <AcercaDeNosotros></AcercaDeNosotros>
    <FooterComponent></FooterComponent>
    </>
  )
}

export default App
