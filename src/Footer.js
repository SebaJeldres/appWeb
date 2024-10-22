// Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import './Footer.css'; // Asegúrate de que este archivo CSS exista

const Footer = ({ username }) => {
  return (
    <footer className="home-footer"> {/* Usa la clase para el footer */}
      <h1 className="footer-title">TricyWorld</h1>
      <div className="footer-content">
        <p className="footer-contact">Contacto: Tricyworld@gmail.com</p>
        <p className="footer-contact">Teléfono: +56 9 0000 0000</p>
      </div>
      <nav className="footer-navbar">
        {username === 'admin' && ( // Cambia a 'admin' en minúsculas si es necesario
          <ul className="footer-nav-links">
            <li><Link to="/SalesReport">Informes de Ventas</Link></li> 
            <li><Link to="/inventory">Inventario</Link></li>
          </ul>
        )}
      </nav>
    </footer>
  );
};

export default Footer;


