import React from "react";

function Mensaje({ actualUser, mensaje }) {
  let esMandandoPorElUsuarioActual = false;

  if (actualUser === mensaje.usuario_correo) {
    esMandandoPorElUsuarioActual = true;
  }
  return esMandandoPorElUsuarioActual ? (
    <div className="row p-2">
      <div className="col-6"></div>
      <div className="col-6">
        <div className="alert alert-info py-2">
          {mensaje.mensaje_texto}
          <div className="d-flex justify-content-end">
            <small className="text-secondary ms-auto">
              {mensaje.usuario_correo}
            </small>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="row p-2">
      <div className="col-6">
        <div className="alert alert-primary py-2">
          {mensaje.mensaje_texto}
          <div className="d-flex justify-content-end">
            <small className="text-secondary ms-auto">
              {mensaje.usuario_correo}
            </small>
          </div>
        </div>
      </div>
      <div className="col-6"></div>
    </div>
  );
}

export default Mensaje;
