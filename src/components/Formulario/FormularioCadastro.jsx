import React, { Component } from 'react'
import './estilo.css'
class FormularioCadastro extends Component {

    constructor(props){
        super(props);
        this._titulo = "";
        this._texto = "";
    }

    _guardarTitulo(event) {
        this._titulo = event.target.value;
    }

    _guardarTexto(event){
        this._texto = event.target.value;
    }

    _criarNota(event){
        event.preventDefault();
        this.props.criarNota(this._titulo, this._texto);
    }


    render() { 
        return ( 
            <form 
            className="form-cadastro"
            onSubmit={this._criarNota.bind(this)}>
                <input  
                className="form-cadastro_input" 
                type="text" 
                placeholder="Título"
                onChange={this._guardarTitulo.bind(this)}
                />
                <br/>
                <textarea  
                rows={15} 
                className="form-cadastro_input" 
                placeholder="Escreva sua nota"
                onChange={this._guardarTexto.bind(this)}
                />
                <br/>
                <button className="form-cadastro_input form-cadastro_submit" >Criar nota</button>
            </form> );
    }
}
 
export default FormularioCadastro;