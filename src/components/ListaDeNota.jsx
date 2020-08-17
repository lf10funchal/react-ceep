import React, { Component } from "react"
import CardNota from "./CardNota"

class ListaDeNota extends Component{
    render(){
        return(
            <ul>
                {Array.of("Trabalho", "Estudos").map(categoria => {
                    return(
                        <li>
                            <h3>{categoria}</h3>
                            <CardNota/>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ListaDeNota;
