// Cart.js
import React from 'react';
import './Cart.css'; // Importa los estilos específicos del carrito
import Header from './Header'; // Importa el componente Header
import Footer from './Footer'; // Importa el componente Footer

const Cart = ({ username }) => {
  return (
    <div className="cart-container">
      <Header username={username} /> {/* Usa el componente Header */}

      <h2 className="cart-title">Tu Carrito</h2> {/* Título fuera del contenedor */}

      <div className="cart-content">
        <div className="cart-box">
          <ul className="cart-product-list">
            <li>Producto 1 - $10,000 CLP</li>
            <li>Producto 2 - $15,000 CLP</li>
            <li>Producto 3 - $12,000 CLP</li>
          </ul>
          <div className="cart-summary">
            <p><strong>Total de productos:</strong> 3</p>
            <p className="cart-total"><strong>Total:</strong> $37,000 CLP</p>
          </div>
          <button className="pay-button">Pagar</button>
        </div>
      </div>

      <Footer /> {/* Usa el componente Footer */}
    </div>
  );
};

export default Cart;




