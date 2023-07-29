const URL_usuario = import.meta.env.VITE_API_USUARIO;

export const iniciarSesion = async (usuario)=>{
  try{
    const respuesta = await fetch (URL_usuarios);
    const listausuario = await respuesta.json();
    const usuarioBuscado = listausuario.find((itemUsuario)=> itemUsuario.email === usuarioBuscado.email);
  
    if(usuarioBuscado){
    if(usuarioBuscado.password === usuario.password){
      return usuarioBuscado
    }else{
      console.log("password incorrecto");
      return null
    }
    }else{
      console.log ("el mail no existe")
      return null
    }

  }catch(error){
     console.log(error); 
     return null;
  }
 
}