import {useState} from "react"
import "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "../../css/login.css"

export const Login = () => {

  const [miLogin, setMiLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");


  function iniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if(txtusu.length===0 || txtpas.length===0){
      alert("Complete Los Datos Faltantes!!");
    }else{
      if(usu === "admin" && pas==="123"){
        setMiLogin("true");
        document.getElementById("form_login").style.display = "none";
      }else{
        setMiLogin("false");
        alert("Error De Usuario y/o Contraseña!!");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
        
      }
    }
  } 

  

  return(
    <div className="container">
    <div className=" formulario mb-sm-3">
      <div className=" m-5 d-flex1">
       <h2 className="text-center">Iniciar sesion</h2>
       <form id={"form_login"}>
        <div className="d-flex px-4 m-3">
          <label htmlFor="Email">
            <strong><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></strong>
          </label>
          <input type="text" id="txtusu" placeholder="Ingresar Correo" autoComplete="off" name="Correo electronico" className=" form-control" onChange={(e=> setUsu(e.target.value))} />
        </div>
        <div className="d-flex px-4 m-3">
          <label htmlFor="contraseña">
            <strong><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
</svg></strong>
          </label>
          <input type="password" id="txtpas" placeholder="Ingresar Contraseña" autoComplete="off" name="password" className="form-control" onChange={(e=> setPas(e.target.value))} /> 
        </div>
        <div className="d-grid gap-2 w-90">
      <Button  onClick={iniciarSesion} type="submit" variant="primary" size="md" >
        Ingresar
      </Button>
      </div>
        </form>
        <h5 className="text-center">¿Olvidaste tu contraseña? </h5>
        <Link to="/registro" className="btn btn-default border w-100  rounded-3 bg-success" >Registrarse</Link>
      </div>
    </div>
    </div>
  );
}


export default Login;