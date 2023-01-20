import React from "react";

function Formulario(props){

    const form = document.getElementById('form')
    const final = document.getElementById('final')
    const etapasConcluidas = 0
    const manipularTela = 0

    const finalizar = () => {
        if(manipularTela == 1){
            form.classList.add('none')
            final.classList.remove('none')
        }
    }

    const validarInputs = () => {
        const inputNome = document.getElementById('inputNome')
        const inputNumero = document.getElementById('inputNumero')
        const inputMes = document.getElementById('inputMes')
        const inputAno = document.getElementById('inputAno')
        const inputCvc = document.getElementById('inputCvc')
        const MsgErro = document.getElementById('MsgErro')

        if(props.nome == "Seu nome aqui !" || props.nome == ''){
            inputNome.style.border = "1px solid red"
            MsgErro.innerHTML = "Os campos em vermelho estão incorretos"
        } else{
            inputNome.style.border = '1px solid green'
        }

        if(props.numero == "0000 0000 0000 0000" || props.numero.length < 19){
            inputNumero.style.border = "1px solid red"
            MsgErro.innerHTML = "Os campos em vermelho estão incorretos"
        } else{
            inputNumero.style.border = '1px solid green'
        }

        if(props.mes == "00" || props.mes.length < 2){
            inputMes.style.border = "1px solid red"
            MsgErro.innerHTML = "Os campos em vermelho estão incorretos"
        } else{
            inputMes.style.border = '1px solid green'
        }

        if(props.ano == "00" || props.ano.length < 2){
            inputAno.style.border = "1px solid red"
            MsgErro.innerHTML = "Os campos em vermelho estão incorretos"
        } else{
            inputAno.style.border = '1px solid green'
        }

        if(props.cvc == "000" || props.cvc.length < 3){
            inputCvc.style.border = "1px solid red"
            MsgErro.innerHTML = "Os campos em vermelho estão incorretos"
        } else{
            inputCvc.style.border = '1px solid green'
        }
    }

    return(
        <div id="form">
            <label> Titular do Cartão</label>

            <input
            id="inputNome"
            pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$" 
            maxLength={25} 
            type='text' 
            value={props.nome} 
            onChange={(e)=>props.setNome(e.target.value)}
            onClick={()=>{
                if(props.nome == "Seu nome aqui !"){
                    props.setNome('')
                }
            }} 
            placeholder={"Ex: Pablo Bidiaki"} />

            <label> Numero do Cartão</label>

            <input
            id="inputNumero"
            maxLength={19}
             type='text'
             value={props.numero} 
             onChange={(e)=>props.setNumero(e.target.value)}
             onClick={()=>{
                if(props.numero == "0000 0000 0000 0000"){
                    props.setNumero('')
                }
            }} 
             placeholder={"Ex: 1111 2222 3333 4444"} /> 
             <br/>

            <div>
                <label> Validade</label>
                 <label style={{marginLeft:'65px'}}> CVC</label>
                  <br/>

                    <input
                    id="inputMes"
                     className="validade" 
                     type='number'
                     onInput={(e) => e.target.value = e.target.value.slice(0, 2)} 
                     value={props.mes} 
                     onChange={(e)=>props.setMes(e.target.value)}
                     onClick={()=>{
                        if(props.mes == "00"){
                            props.setMes('')
                        }
                    }} 
                     placeholder={"MM"} />

                    <input
                    id="inputAno"
                      className="validade"
                      type='number'
                      onInput={(e) => e.target.value = e.target.value.slice(0, 2)} 
                      value={props.ano} 
                      onChange={(e)=>props.setAno(e.target.value)}
                      onClick={()=>{
                        if(props.ano == "00"){
                            props.setAno('')
                        }
                    }} 
                      placeholder={"AA"} />

                    <input
                    id="inputCvc"
                     className="cvc" 
                     type='number'
                     onInput={(e) => e.target.value = e.target.value.slice(0, 3)}
                     value={props.cvc} 
                     onChange={(e)=>props.setCvc(e.target.value)}
                     onClick={()=>{
                        if(props.cvc == "000"){
                            props.setCvc('')
                        }
                    }} 
                     placeholder={"Ex: 123"} />
            </div>
            <button onClick={()=> validarInputs()}>Confirmar</button>
            <p id="MsgErro"></p>
        </div>
    )
}

export default Formulario;