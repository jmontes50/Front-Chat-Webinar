import axios from 'axios';

const URL = `${process.env.REACT_APP_ENDPOINT}/register`
console.log(URL)

const crearUsuario = async (email, nombre) => {
  try {
    let headers = {
      "Content-Type": "application/json"
    }
    let nuevoUsuario = {
      usuario_correo:email,
      usuario_nombre:nombre,
	    usuario_estado:true
    }
    let {data} = await axios.post(URL, nuevoUsuario, {headers} )
    console.log({data})
    return data
  } catch (error) {
    console.log(error)
  }
}


export { 
  crearUsuario
}