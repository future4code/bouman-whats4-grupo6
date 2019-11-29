import React from 'react';
import './Usuario.css';

class Usuario extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      arrayUserMsg: [
      {nomeUser: "", textoMensagem: ""}
      ]
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
    let arrayteste = [...this.state.arrayUserMsg]
    const novaMsg = {texto: this.state.textoMensagem}
    arrayteste.push(novaMsg)
    this.setState({
          arrayUserMsg: arrayteste
    }) 
}
  render() {
    return (
      <div>
        <div id="Main-container">
          { this.state.arrayUserMsg.map((mensagem, index, array)=>{
            return(
              <div> 
                  <h4>{mensagem.nomeUser}</h4>
                  <p>{mensagem.textoMensagem}</p>
              </div>
            );
            })}
        </div>
        <div>
          <input className="Estilo-usuario" placeholder="Usuário" value={this.state.nomeUser} onChange={this.controleUser}/>
          <input className="Estilo-Mensagem" placeholder="Mensagem" value={this.state.textoMensagem} onChange={this.controleMensagem}/>
          <button onClick={this.aoSalvar}>Enviar</button>
        </div>
      </div>
     );
  }

}



export default Usuario;
