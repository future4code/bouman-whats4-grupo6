import React from 'react';
import './App.css';
import ContainerMensagens from '../src/components/ContainerMensagens/ContainerMensagens'
import Usuario from '../src/components/Usuario/Usuario'
import InputMensagem from '../src/components/InputMensagem/InputMensagem'
import BotaoEnviar from '../src/components/BotaoEnviar/BotaoEnviar'

function App() {
  return (
    <div className="Main-container"> 
      <ContainerMensagens/>
      <Usuario/>
      <InputMensagem/>
      <BotaoEnviar/>
    </div>
  );
}

export default App;
