
import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component {
  render() {
    return (
      <a href={this.props.abobrinha || "http://www.pudim.com.br"}>  {/*this.props.nomePropriedade OU "endereçofixo.com"*/}
      {this.props.texto || "Link"}
      </a>
    );
  }
}

export default MenuItem;