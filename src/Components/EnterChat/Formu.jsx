import React, { Component } from "react";

class Formu extends Component {
  state = {
    nombre: "",
    nombre_usuario: "",
    email: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    this.setState({ nombre: "", nombre_usuario: "", email: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            ref={input => (this.inputNombre = input)}
            value={this.state.nombre}
            onChange={e => this.setState({ nombre: e.target.value })}
            placeholder="ingrese su nombre"
          />
          <br />
          <input
            ref={input => (this.inputNombre_usuario = input)}
            value={this.state.nombre_usuario}
            onChange={e => this.setState({ nombre_usuario: e.target.value })}
            placeholder="ingrese su nombre de usuario"
          />
          <br />
          <input
            ref={input => (this.inputEmail = input)}
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            placeholder="ingrese su email"
          />
          <br />
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}

export default Formu;
