import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h3>Horario de atención</h3>
            <p>Lunes a Viernes: 11:00 AM - 10:00 PM</p>
            <p>Sábados y Domingos: 12:00 PM - 11:00 PM</p>
          </div>
          <div className="col-sm-6">
            <h3>Contacto</h3>
            <p>Dirección: Calle Principal, Ciudad</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: info@restauranteitaliano.com</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p className="text-center">&copy; {new Date().getFullYear()} Restaurante Italiano. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;