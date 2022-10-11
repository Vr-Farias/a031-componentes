import React from "react";
import { InfosUsuarios } from "./InfosUsuario";

export function CardVideos() {
    const titulo = "Título do vídeo";

    function reproduzVideo() {
      alert("O vídeo está sendo reproduzido");
    }

    return(
        <div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=1" alt="" />
            <h4>{titulo}</h4>
             <InfosUsuarios/> 
        </div>
      </div>
    )
}