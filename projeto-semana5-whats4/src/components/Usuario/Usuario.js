import React from 'react';
import './Usuario.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';


class Usuario extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      arrayUserMsg : [],
    };
  }

  controleUser = e =>{
    this.setState({
      nomeUser: e.target.value
    });
  };

  controleMensagem = e =>{
    this.setState({
      textoMensagem: e.target.value
    });
  };

  aoSalvar = () => {
    const novaMsg = {
      nome: this.state.nomeUser,
      texto: this.state.textoMensagem
    }
    let arrayNovo = [...this.state.arrayUserMsg]
    arrayNovo.push(novaMsg)
    this.setState({
          arrayUserMsg: arrayNovo
    }) 
  }
  render() {
    return (
      <div>
        <div id="Main-container">
          { this.state.arrayUserMsg.map((mensagem, index, array)=>{
            return(
              <div className="area-mensagem"> 
                <div className="conteudo-mensagem">
                  <p><strong>{mensagem.nome + ": "}</strong>{mensagem.texto}</p>
                </div>
              </div>
            );
            })}
        </div>
        <div className="estilo-input">
          <input className="Estilo-usuario" placeholder="Usuário" value={this.state.nomeUser} onChange={this.controleUser}/>
          <input className="Estilo-Mensagem" placeholder="Mensagem" value={this.state.textoMensagem} onChange={this.controleMensagem}/>
          <button onClick={this.aoSalvar}>Enviar</button>
        </div>
      </div>
     );
  }
}

Usuario.propTypes = {
  nome: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
}
export default Usuario;
