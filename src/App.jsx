import "bootstrap/dist/css/bootstrap.min.css";
import NavbarPageComponent from './components/common/NavbarComponent';
import FooterComponent from "./components/common/FooterComponent";
import Error404 from "./components/views/Error404";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <NavbarPageComponent></NavbarPageComponent>
      <Routes>
        <Route path="/error404" element={<Error404></Error404>}></Route>
      </Routes>
    <FooterComponent></FooterComponent>
    </BrowserRouter>
  )
}

export default App
