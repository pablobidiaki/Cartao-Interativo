import React from "react";
import imgFinalizado from '../componentes/imgs/icon-complete.svg'

function TelaFinal(){
    return(
        <>
            <div id="final" className="none">
                <img className="imgFinal" src={imgFinalizado} />
                <p className="obg"> Obrigado !</p>
                <p className="msgFinal">Os detalhes do seu cartão foram adicionados !</p>
                <button className="">Continuar</button>
            </div>
        </>
    )
}

export default TelaFinal;