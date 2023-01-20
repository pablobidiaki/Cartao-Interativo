import React from "react";
import LogoCartao from "../componentes/imgs/card-logo.svg"

function cartaoFrente(props){
    return(
        <>
            <div className="frenteCartao">
                <img src={LogoCartao} />
                <p className="numero">{props.numero}</p>
                <div className="nomeValidade">
                    <p className="nome">{props.nome}</p>
                    <p className="validadeRes">{props.mes}/{props.ano}</p>
                </div>
            </div>
        </>
    )
}

export default cartaoFrente;