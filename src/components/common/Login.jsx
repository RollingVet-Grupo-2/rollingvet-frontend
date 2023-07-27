import {useState} from "react"
import "react-bootstrap"
import { Link } from "react-router-dom";
import axios from "axios";
function Login(){
  const [correo,setCorreo]= useState()
  const [contrasena,setContrasena]= useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("", {correo , contrasena})
    .then(result => console.log (result))
    .catch(err=> console.log(err))

  }

  return(
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-b3 rounded w-25">
       <h2 className="text-center">Iniciar sesion</h2>
       <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Email">
            <strong>Correo electronico</strong>
          </label>
          <input type="text"
          placeholder="Ingresar Correo" 
          autoComplete="off"
          name="Correo electronico"
          className="form-control rounded-0"
          onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contraseña">
            <strong>contraseña</strong>
          </label>
          <input type="password"
          placeholder="Ingresar Contraseña" 
          autoComplete="off"
          name="password"
          className="form-control rounded-0"
          onChange={(e) => setContrasena(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-success w-90  rounded-0">iNGRESAR</button>
        </form>
        <p>¿Olvidaste tu contraseña? </p>
        <Link to="/registro" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Registrarse</Link>
      </div>
    </div>
  );
}

export default Login;