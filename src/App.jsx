import "bootstrap/dist/css/bootstrap.min.css";
import NavbarPageComponent from './components/common/NavbarComponent';
import FooterComponent from "./components/common/FooterComponent";
import Error404 from "./components/views/Error404";
function App() {

  return (
    <>
    {/* <NavbarPageComponent></NavbarPageComponent> */}
    <Error404></Error404>
    <FooterComponent></FooterComponent>
    </>
  )
}

export default App
