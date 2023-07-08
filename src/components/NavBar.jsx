import React, { useState } from 'react'
import '../assets/styles/NavBar.css'
import '../pages/MenuPopup.jsx'

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de inicio de sesión
    // Por ahora, simplemente cambiará el estado loggedIn y el nombre de usuario
    setLoggedIn(true);
    setUsername('Patricio');
  };

  const handleLogout = () => {
    // Aquí puedes agregar la lógica de cierre de sesión
    // Por ahora, simplemente cambiará el estado loggedIn y el nombre de usuario
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="MenuPopup">Menú</a>
        </li>
        <li>
          <a href="/reservas">Reservas</a>
        </li>
        <li>
          <a href="/contacto">Contacto</a>
        </li>
        {loggedIn ? (
          <li>
            <span>Bienvenido, {username}!</span>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </li>
        ) : (
          <li>
            <button onClick={handleLogin}>Iniciar sesión</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
