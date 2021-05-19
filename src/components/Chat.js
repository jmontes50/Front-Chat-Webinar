import React, { Fragment, useState } from "react";
import Mensaje from "./Mensaje";
import ScrollToBottom, { StateContext } from "react-scroll-to-bottom";

function Chat({ mensajes, actualUser, mandarMensaje }) {
  const [mensaje, setMensaje] = useState("");

  const sendMessage = () => {
    if(mensaje.trim() === ""){
      return;
    }
    mandarMensaje(mensaje);
    setMensaje("" )
  };

  return (
    <div className="p-5 ">
      <h1>Chat!</h1>
      <ScrollToBottom className="toBottom border border-info">
        {/* Mensajes */}
        {mensajes.map((msg, i) => (
          <Mensaje mensaje={msg} actualUser={actualUser} key={i}>
            {/* {console.log({msg})} */}
          </Mensaje>
        ))}
      </ScrollToBottom>
      <div className="row mt-3">
        <div className="col-11">
          <input
            className="form-control"
            type="text"
            value={mensaje}
            onChange={(e) => {
              setMensaje(e.target.value);
            }}
            placeholder="Escribe un mensaje!!!"
          />
        </div>
        {/* input */}
        <div className="col-1">
          <div className="d-grid gap-2">
            <button className="btn btn-info" onClick={sendMessage}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
