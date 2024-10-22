// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import './Header.css'; // Crea un archivo CSS para los estilos del header

const Header = ({ username }) => {
  return (
    <header className="home-header">
      <div className="header-content">
        <h1 className="header-title">TricyWorld</h1>
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li> {/* Enlace a la página de inicio */}
            <li><Link to="/product">Productos</Link></li>
            <li><Link to="/cart">Carrito</Link></li> {/* Enlace al carrito */}
            <li><Link to="/perfil">Perfil</Link></li> {/* Enlace al perfil */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;



