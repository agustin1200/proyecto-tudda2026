import MenuItem from "./MenuItem";

export default function Menu ({
    visible = true 
}) {
  return <nav
    style={{
        display: visible ? 'block' : 'none',
        backgroundColor: "lightblue",
    }}
  >
    <MenuItem to="/">Inicio</MenuItem>
    <MenuItem to="/login">Login</MenuItem>
    <MenuItem to="/about">Acerca de</MenuItem>
    <MenuItem to="/user">Agregar usuario</MenuItem>

  </nav>;
}
