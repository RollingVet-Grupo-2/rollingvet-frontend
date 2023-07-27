import React from "react";

function Registro(){
return(
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
    <div className="bg-white p-b3 rounded w-25">
     <h2 className="text-center">Registro</h2>
     <form>
     <div className="mb-3">
        <label htmlFor="Email">
          <strong>Ingrese su Nombre y Apelido</strong>
        </label>
        <input type="text"
        placeholder="Ingresar Nombre y apellido" 
        autoComplete="off"
        name="Nombre"
        className="form-control rounded-0"/>
      </div>
      <div className="mb-3">
        <label htmlFor="Email">
          <strong>Correo electronico</strong>
        </label>
        <input type="text"
        placeholder="Ingresar Correo" 
        autoComplete="off"
        name="Correo electronico"
        className="form-control rounded-0"/>
      </div>
      <div className="mb-3">
        <label htmlFor="Email">
          <strong>contraseña</strong>
        </label>
        <input type="text"
        placeholder="Ingresar Contraseña" 
        autoComplete="off"
        name="password"
        className="form-control rounded-0"/>
      </div>
      <button type="submit" className="btn btn-success w-90  rounded-0">iNGRESAR</button>
      </form>
    </div>
  </div>
)
}

export default Registro;