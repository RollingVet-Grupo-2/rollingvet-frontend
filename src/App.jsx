
import  Login from "./components/common/Login"
import {useState} from "react"
import Registro from "./components/common/Registro"
import "bootstrap/dist/css/bootstrap.min.css"
import {  BrowserRouter ,Routes,Route} from "react-router-dom"
import "./css/login.css"
import "./css/registro.css"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/registro" element={<Registro/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;