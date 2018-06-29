import React, { Component } from 'react';
import './Cabecalho.css';
import MenuItem from './MenuItem';

class Cabecalho extends Component {
  render() {
    return (
        <header>
            <h1>Gatinhos em React</h1>
            <nav>
                <MenuItem texto="Facebook" abobrinha="http://fb.com"/> 
                <MenuItem texto="MySpace" abobrinha="http://myspace.com"/>
                <MenuItem texto="Pudim" abobrinha="http://pudim.com.br"/>
                <MenuItem texto="Orkut" abobrinha="http://orkut.com"/>
            </nav>
        </header>
    );
  }
}

export default Cabecalho;

//abobrinha é props 