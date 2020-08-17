import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListaDeNota from './components/ListaDeNota'
import FormularioCadastro from './components/FormularioCadastro'

class App extends Component {
  render(){
    return (
      <section>
        <FormularioCadastro/>
        <ListaDeNota/>
      </section>
    );
  }
}
export default App;
