import React, { Component } from 'react';
import './assets/App.css';
import './assets/index.css';
import ListaDeNota from './components/Lista/ListaDeNota'
import FormularioCadastro from './components/Formulario/FormularioCadastro'
class App extends Component {

  constructor(){
    super();
    this._notas = [];
    this.state = {};
  }

  criarNota(titulo, texto) {
    let nota = {titulo, texto};
    this._notas.push(nota);
    this.setState({
      notas: this._notas
    })
  }
  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNota notas={this._notas}/>
      </section>
    );
  }
}
export default App;
