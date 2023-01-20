import React, {useState} from 'react';
import CartaoFrente from './componentes/cartaoFrente';
import CartaoVerso from './componentes/cartaoVerso';
import Formulario from './componentes/formulario';
import TelaFinal from './componentes/telaFinal';
import './App.css';

function App() {

  const [nome, setNome] = useState('Seu nome aqui !')
  const [numero, setNumero] = useState('0000 0000 0000 0000')
  const [mes, setMes] = useState('00')
  const [ano, setAno] = useState('00')
  const [cvc, setCvc] = useState('000')

  return (
    <div className='container'>
      <div className='cartoes'>
        <CartaoFrente 
        nome={nome} 
        numero={numero} 
        mes={mes} 
        ano={ano} 
        cvc={cvc}/>
        <CartaoVerso 
        cvc={cvc}/>
      </div>
      <div className='formulario'>
        <Formulario 
        nome={nome} 
        setNome={setNome} 
        numero={numero} 
        setNumero={setNumero} 
        mes={mes} 
        setMes={setMes} 
        ano={ano} 
        setAno={setAno} 
        cvc={cvc} 
        setCvc={setCvc} />
        <TelaFinal />
      </div>
    </div>
  );
}

export default App;
