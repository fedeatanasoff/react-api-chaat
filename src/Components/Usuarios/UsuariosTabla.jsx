import React, { Component } from "react";
import axios from "axios";
import io from "socket.io-client";
import "./UsuariosTabla.css";

const socket = io("http://localhost:5000");

let random = Math.floor(Math.random() * 5) + 1;

class UsuariosTabla extends Component {
  state = {
    usuarios: [],
    usuario: {
      nombre: "",
      nombre_usuario: "",
      email: ""
    },
    mensajes: [{}]
  };

  componentDidMount() {
    socket.on("messages", data => {
      console.log("componenet did mount data", data);
      let join = this.state.mensajes.concat(data);

      this.setState({ mensajes: join });
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    let mensaje = this.inputMensajes.value;
    let obj = { cuerpo: mensaje, usuario: this.state.usuario.nombre_usuario };

    // console.log("mensaje entrante", mensaje);
    // this.setState({ mensajes: [...this.state.mensajes, obj] });

    socket.emit("agregar-msg", obj);
    this.inputMensajes.value = "";
  };

  componentWillMount() {
    axios
      .get("http://localhost:2000/api/v1/usuarios/usuario_id/" + random)
      .then(res => {
        console.log("respuesta get: ", res.data.usuario);

        const usuario = {
          id: res.data.usuario.id,
          nombre: res.data.usuario.nombre,
          nombre_usuario: res.data.usuario.nombre_usuario,
          email: res.data.usuario.email,
          creado_en: res.data.usuario.creado_en,
          actualizado_en: res.data.usuario.actualizado_en,
          id_status: res.data.usuario.id_status
        };

        this.setState({
          usuario: {
            nombre: usuario.nombre,
            nombre_usuario: usuario.nombre_usuario,
            email: usuario.email
          }
        });

        socket.emit("new_usuario", usuario);
        socket.on("usuarios", usuarios => {
          this.setState({ usuarios: usuarios });
        });
      });
  }

  render() {
    console.log("usuarios desde render ", this.state);
    const { usuarios } = this.state;
    return (
      <div>
        <div className="row">
          {usuarios.map((usuario, index) => (
            <h3 className="badge bagde-primary" key={index}>
              {usuario.nombre}
            </h3>
          ))}
        </div>
        <div className="row mensajes">
          <div />
          <ul>
            {this.state.mensajes.map((mensaje, index) => (
              <li key={index} className="mensaje">
                <span class="badge badge-primary">{mensaje.usuario}</span> -{" "}
                {mensaje.cuerpo}
              </li>
            ))}
          </ul>
        </div>
        <div className="row">
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                ref={input => (this.inputMensajes = input)}
                // onChange={e => this.setState({ msg: e.target.value })}
                placeholder="ingrese su mensaje"
              />
              <br />

              <button>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UsuariosTabla;
