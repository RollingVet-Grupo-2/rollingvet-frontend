const URL_usuario = import.meta.env.VITE_API_USUARIO;

export const iniciarSesion = async (usuario)=>{
  try{
      const respuesta = await fetch(URL_usuario,{
          method: "POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify(usuario)
      });

      const datos = await respuesta.json();
      return {
          status: respuesta.status,
          nombreUsuario: datos.nombreUsuario 
      }
      
  }catch(error){
     console.log(error); 
     return null;
  }
} 
