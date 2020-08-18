import React, { Component } from 'react';
import './assets/App.css';
import './assets/index.css';
import ListaDeNota from './components/Lista/ListaDeNota'
import FormularioCadastro from './components/Formulario/FormularioCadastro'
class App extends Component {
  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro/>
        <ListaDeNota/>
      </section>
    );
  }
}
export default App;
