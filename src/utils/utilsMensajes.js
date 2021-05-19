let mensajesTmp = [];

const ordenarMensajes = (usuarios) => {
  mensajesTmp = [];
  /**
   * Cuando recibo los mensajes, los recibo por usuario, como una propiedad.
   * ENTONCES
   * Como recibo usuarios y cada usuario tiene sus mensajes, lo que hago es extraer todos, asignarle su usuario adecaudo y ordenarlos por fecha
   */
  // console.log(usuarios)
  for(let i = 0; i < usuarios.length; i++){
    let usuario_correo = usuarios[i].usuario_correo
    for(let j = 0; j < usuarios[i].mensajes.length; j++){
      let mensajeActual = usuarios[i].mensajes[j]
      let mensajeConUsuario = {...mensajeActual, usuario_correo}
      mensajesTmp.push(mensajeConUsuario)
    }
  }

  let ordenarMensajes = mensajesTmp.sort((a, b) => {
    let fecha1 = new Date(a.mensaje_fecha)
    let fecha2 = new Date(b.mensaje_fecha)

    return fecha1 - fecha2
  })
  return ordenarMensajes
}

export {
  ordenarMensajes
}