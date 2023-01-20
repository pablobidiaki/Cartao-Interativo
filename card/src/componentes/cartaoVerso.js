import React from "react";

function cartaoVerso(props){
    return(
        <>
            <div className="versoCartao">
                <p className="versoCvc">{props.cvc}</p>
            </div>
        </>
    )
}

export default cartaoVerso;