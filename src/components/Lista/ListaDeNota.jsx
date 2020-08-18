import React, { Component } from "react"
import CardNota from "../Card/CardNota"
import './estilo.css'

class ListaDeNota extends Component{
    render(){
        return(
            <ul className="lista-notas">
                {Array.of("Trabalho", "Estudos").map((categoria, index) => {
                    return(
                        <li className="lista-notas_item" key={index}>
                            <CardNota/>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ListaDeNota;