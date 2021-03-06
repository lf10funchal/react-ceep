import React, { Component } from "react"
import CardNota from "../Card/CardNota"
import './estilo.css'

class ListaDeNota extends Component{
    render(){
        return(
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => {
                    return(
                        <li 
                        className="lista-notas_item" 
                        key={index}>
                            <CardNota
                            indice={index} 
                            titulo={nota.titulo} 
                            texto={nota.texto}

                            apagarNota={this.props.apagarNota}
                            
                            />
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ListaDeNota;
