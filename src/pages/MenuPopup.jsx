
import React, { useState } from 'react';

const MenuPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class='botonpopup'>
      <button class='vermenu' onClick={togglePopup}>Ver Menú</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
          <h2 id='menu'>Menú Italiano</h2>
      <ul>
        <li>
          <h3>Pizza Margherita</h3>
          <p>Deliciosa pizza con salsa de tomate, mozzarella y albahaca.</p>
        </li>
        <li>
          <h3>Lasagna Bolognesa</h3>
          <p>Clásica lasaña italiana con capas de pasta, carne y salsa bechamel.</p>
        </li>
        <li>
          <h3>Risotto de Champiñones</h3>
          <p>Arroz cremoso cocinado con champiñones, vino blanco y parmesano.</p>
        </li>
        <li>
          <h3>Ossobuco alla Milanese</h3>
          <p>Estofado de ternera tierna servido con salsa de vino tinto.</p>
        </li>
        <li>
          <h3>Tiramisú</h3>
          <p>Postre italiano clásico hecho con bizcochos, café y crema de mascarpone.</p>
        </li>
      </ul>
            <button onClick={togglePopup}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuPopup;
