import React from "react";
import social from "../static/SocialDistancing.png"
function RoomsView({ rooms, crearRoom }) {
  return (
    <div className="container">
      <h1 className="mt-4">Salas</h1>
      <div className="row">
        <div className="col-12 col-lg-6 pt-4">
          <ul className="list-group">
            
            {rooms ? rooms.map((room, i)=>(
              <li className="list-group-item" key={i}>{`room ${i}`}</li>
            )) : null}
            <li className="list-group-item">Crear Sala</li>
          </ul>
        </div>
        <div className="col-12 col-lg-6">
          <img src={social} alt="rooms"/>
        </div>
      </div>
    </div>
  );
}

export default RoomsView;
