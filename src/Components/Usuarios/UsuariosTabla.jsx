import React, { Component } from "react";
import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

let random = Math.floor(Math.random() * 5) + 1;

class UsuariosTabla extends Component {
  state = {
    usuarios: []
  };

  componentWillMount() {
    axios
      .get("http://localhost:2000/api/v1/usuarios/usuario/" + random)
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

        console.log("usuario destructurado", usuario);

        socket.emit("new_usuario", usuario);

        socket.on("usuarios", usuarios => {
          this.setState({ usuarios: usuarios });
        });
      });
  }

  render() {
    const { usuarios } = this.state;
    return (
      <div>
        <table className="table table-hover text-center">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">nombre</th>
              <th scope="col">usuario</th>
              <th scope="col">email</th>
              <th scope="col">fecha de creacion</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => (
              <tr key={usuario.id}>
                <th scope="row">{usuario.id}</th>
                <td>{usuario.nombre}</td>
                <td>{usuario.nombre_usuario}</td>
                <td>{usuario.email}</td>
                <td>{usuario.creado_en}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UsuariosTabla;
