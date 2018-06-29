import React, { Component } from 'react';
import './Lateral.css';

import MenuItem from './MenuItem';

class Lateral extends Component {

    constructor(props){
        super(props)    
        this.state = {
            visivel: false
        };
    }

    visivel= () => {
        if (this.state.visivel){
            return "visivel";
        } else {
            return "invisivel";
        };
    }
    clique = () => {
            if (this.state.visivel) {
                this.setState ({visivel: false});
            } else {
                this.setState ({visivel: true});
            }
        }

  render() {
    return (
        <div id="lateral" className={this.visivel()}>
            <button onClick={this.clique}>Clique</button>
            <h2>Menu Lateral</h2>
            <ul>
                <li><MenuItem/></li>
                <li><MenuItem/></li>
                <li><MenuItem/></li>
            </ul>
        </div>
    );
  }
}

export default Lateral;

{/*
método construtor da classe anterior, obrigatório
Normalmente, quem executa a função é THIS
Porém, quando voce usa uma arrowFuction (=>) você muda a função do THIS, pois o THIS é quem CRIOU a arrowFunction e não quem EXECUTA
*/}