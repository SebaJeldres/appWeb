// Perfil.js
import React from 'react';
import './Perfil.css'; // Puedes crear un archivo CSS similar a Cart.css
import Header from './Header'; // Importa el componente Header
import Footer from './Footer'; // Importa el componente Footer

const Perfil = ({ username }) => {
  return (
    <div className="perfil-container">
      <Header username={username} /> {/* Usa el componente Header aquí */}

      <div className="perfil-content">
        <div className="perfil-box">
          <h2>Información de la Cuenta</h2>
          <p><strong>Nombre:</strong> Juan Pérez</p>
          <p><strong>Dirección:</strong> Av. Libertador 1234, Santiago, Chile</p>
          <p><strong>Teléfono:</strong> +56 9 8765 4321</p>
          <p><strong>Email:</strong> juan.perez@gmail.com</p>
          <p><strong>Fecha de Nacimiento:</strong> 01/01/1990</p>
          <button className="edit-button">Editar Información</button>
        </div>
      </div>

      <Footer /> {/* Usa el componente Footer aquí */}
    </div>
  );
};

export default Perfil;
