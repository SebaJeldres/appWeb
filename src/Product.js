import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Product.css';

const Products = () => {
  // Datos de ejemplo para los productos
  const productsData = [
    {
      id: 1,
      name: 'Triciclo Azul',
      type: 'Triciclo',
      price: 20000,
      description: 'Triciclo de tres ruedas con manillar ajustable y asiento acolchado.',
    },
    {
      id: 2,
      name: 'Casco de Seguridad',
      type: 'Implemento de Seguridad',
      price: 5000,
      description: 'Casco de protección para niños, ajustable y resistente.',
    },
    {
      id: 3,
      name: 'Triciclo Verde',
      type: 'Triciclo',
      price: 22000,
      description: 'Triciclo verde con ruedas antideslizantes y diseño ergonómico.',
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="products-container">
      <Header />
      <h2>Productos Disponibles</h2>
      <div className="products-list">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Tipo: {product.type}</p>
            <p>Precio: {product.price} CLP</p>
            <button onClick={() => openModal(product)}>Ver Detalles</button>
            <button className="add-to-cart-button">Añadir al Carrito</button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{selectedProduct.name}</h3>
            <p><strong>Tipo:</strong> {selectedProduct.type}</p>
            <p><strong>Precio:</strong> {selectedProduct.price} CLP</p>
            <p><strong>Descripción:</strong> {selectedProduct.description}</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Products;
