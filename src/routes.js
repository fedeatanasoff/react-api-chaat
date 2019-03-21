import PublicChat from "./Components/PublicChat/PublicChat";
import RoomChat from "./Components/RoomChat/RoomChat";
import UsuariosTabla from "./Components/Usuarios/UsuariosTabla";

export default [
  { path: "/", exaact: true, Component: UsuariosTabla },
  { path: "/roomchat", Component: RoomChat },
  { path: "/chat", Component: PublicChat }
];
