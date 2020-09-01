import React, { Component } from 'react';
import './assets/App.css';
import './assets/index.css';
import ListaDeNota from './components/Lista/ListaDeNota'
import FormularioCadastro from './components/Formulario/FormularioCadastro'
import ListaDeCategoria from './components/ListaDeCategoria/ListaDeCategoria'
class App extends Component {

  constructor(){
    super();
    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArray = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArray
    }
    this.setState(novoEstado);
  }

  apagarNota(index){
    let array = this.state.notas;
    array.splice(index, 1);
    this.setState({notas:array});
  }
  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <main className="memoria-principal">
          <ListaDeCategoria/>
          <ListaDeNota 
            notas={this.state.notas}
            apagarNota={this.apagarNota.bind(this)}
          />
          
        </main>
      </section>
    );
  }
}
export default App;
