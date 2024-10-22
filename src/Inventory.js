// Inventory.js
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Inventory.css'; // Asegúrate de que el archivo CSS esté importado

const Inventory = () => {
  const [filterType, setFilterType] = useState('id');
  const [filterValue, setFilterValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null); // Producto actual para modificar
  const [newProduct, setNewProduct] = useState({ id: '', name: '', price: '', stock: '', dateAdded: '' });

  const products = [
    { id: 1, name: 'Triciclo Azul', price: 20000, stock: 10, dateAdded: '2024-01-01' },
    { id: 2, name: 'Triciclo Verde', price: 22000, stock: 5, dateAdded: '2024-02-01' },
    { id: 3, name: 'Cascos', price: 4000, stock: 15, dateAdded: '2024-03-01' },
    // Añade más productos según sea necesario
  ];

  const filteredProducts = products.filter(product => {
    if (filterType === 'id') {
      return product.id.toString().includes(filterValue);
    } else if (filterType === 'name') {
      return product.name.toLowerCase().includes(filterValue.toLowerCase());
    }
    return true; // Retornar todos si no se aplica ningún filtro
  });

  const handleAddProduct = () => {
    // Lógica para agregar el producto (puedes agregarlo a un estado o hacer una petición)
    if (currentProduct) {
      // Si currentProduct existe, estamos modificando un producto
      const updatedProducts = products.map(product =>
        product.id === currentProduct.id ? newProduct : product
      );
      alert(`Producto Modificado: ${JSON.stringify(newProduct)}`);
      // Aquí deberías establecer el nuevo estado para el producto modificado si usas estado
    } else {
      alert(`Producto Agregado: ${JSON.stringify(newProduct)}`);
      // Aquí deberías agregar el nuevo producto a tu estado si usas estado
    }
    
    setShowModal(false); // Cerrar el modal después de agregar o modificar
    setNewProduct({ id: '', name: '', price: '', stock: '', dateAdded: '' }); // Limpiar el formulario
    setCurrentProduct(null); // Reiniciar el producto actual
  };

  const handleModifyProduct = (product) => {
    setNewProduct(product); // Establecer los datos del producto actual en el formulario
    setCurrentProduct(product); // Establecer el producto actual para modificar
    setShowModal(true); // Mostrar el modal
  };

  const handleDeleteProduct = (id) => {
    // Lógica para eliminar el producto
    alert(`Producto Eliminado: ${id}`);
    // Aquí deberías actualizar el estado de productos
  };

  return (
    <div className="inventory-container">
      <Header />
      <h2>Inventario de Productos</h2>
      <div className="inventory-filter">
        <label htmlFor="filterType">Filtrar por:</label>
        <select
          id="filterType"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="id">ID</option>
          <option value="name">Nombre</option>
        </select>
        <input
          type="text"
          placeholder="Ingresa el valor para filtrar"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
        <button className="add-product-button" onClick={() => { setShowModal(true); setNewProduct({ id: '', name: '', price: '', stock: '', dateAdded: '' }); setCurrentProduct(null); }}>Agregar Producto</button>
      </div>

      <div className="table-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Fecha Agregado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price} CLP</td>
                <td>{product.stock}</td>
                <td>{new Date(product.dateAdded).toLocaleDateString('es-CL')}</td>
                <td>
                  <div className="button-group">
                    <button className="modify-button" onClick={() => handleModifyProduct(product)}>Modificar</button>
                    <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>{currentProduct ? 'Modificar Producto' : 'Agregar Producto'}</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleAddProduct(); }}>
              <input 
                type="text" 
                placeholder="ID" 
                value={newProduct.id} 
                onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}
                required 
              />
              <input 
                type="text" 
                placeholder="Nombre" 
                value={newProduct.name} 
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                required 
              />
              <input 
                type="number" 
                placeholder="Precio" 
                value={newProduct.price} 
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                required 
              />
              <input 
                type="number" 
                placeholder="Stock" 
                value={newProduct.stock} 
                onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                required 
              />
              <input 
                type="date" 
                value={newProduct.dateAdded} 
                onChange={(e) => setNewProduct({ ...newProduct, dateAdded: e.target.value })}
                required 
              />
              <div className="button-group">
                <button type="submit" className="add-product-button">{currentProduct ? 'Modificar' : 'Agregar'}</button>
                <button type="button" className="close-modal-button" onClick={() => setShowModal(false)}>Cerrar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Inventory;





