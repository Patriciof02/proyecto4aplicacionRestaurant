import React, { useState } from 'react';

function Reserva() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const handleReserva = () => {
    // Aquí puedes agregar la lógica para enviar la reserva al servidor
    console.log('Reserva enviada:', { nombre, fecha, hora });
  };

  return (
    <div>
      <h1>Reserva de Restaurante</h1>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="date"
        placeholder="Fecha"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <input
        type="time"
        placeholder="Hora"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
      />
      <button onClick={handleReserva}>Reservar</button>
    </div>
  );
}

export default Reserva;
