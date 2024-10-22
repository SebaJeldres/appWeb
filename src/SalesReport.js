import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './SalesReport.css'; // Importa los estilos específicos del informe de ventas

const SalesReport = ({ username }) => {
  const [filterType, setFilterType] = useState('id');
  const [filterValue, setFilterValue] = useState('');

  // Datos de ejemplo para las ventas en formato de boleta, ahora incluyendo userId
  const salesData = [
    { id: 1, userId: 101, products: [{ name: 'Triciclo Azul', amount: 20000 }, { name: 'Triciclo Verde', amount: 20000 }, { name: 'Cascos', quantity: 2, amount: 4000 }], totalAmount: 44000, date: '2024-10-15' },
    { id: 2, userId: 102, products: [{ name: 'Triciclo Rojo', amount: 30000 }, { name: 'Cascos', quantity: 1, amount: 2000 }], totalAmount: 32000, date: '2024-10-16' },
    { id: 3, userId: 103, products: [{ name: 'Triciclo Amarillo', amount: 25000 }, { name: 'Cascos', quantity: 1, amount: 2000 }], totalAmount: 27000, date: '2024-10-17' },
    { id: 4, userId: 104, products: [{ name: 'Triciclo Verde Limón', amount: 22000 }, { name: 'Cascos', quantity: 2, amount: 4000 }], totalAmount: 30000, date: '2024-10-18' },
    { id: 5, userId: 101, products: [{ name: 'Triciclo Negro', amount: 26000 }, { name: 'Cascos', quantity: 1, amount: 2000 }], totalAmount: 28000, date: '2024-10-19' },
  ];

  // Filtrado de datos según el tipo y valor de filtro
  const filteredSalesData = salesData.filter(sale => {
    if (filterType === 'id') {
      return sale.id.toString().includes(filterValue);
    } else if (filterType === 'date') {
      return new Date(sale.date).toLocaleDateString('es-CL').includes(filterValue);
    } else if (filterType === 'userId') {
      return sale.userId.toString().includes(filterValue);
    }
    return true; // Retornar todos si no se aplica ningún filtro
  });

  // Calcular el número total de boletas y el monto total
  const totalInvoices = filteredSalesData.length;
  const totalSales = filteredSalesData.reduce((acc, sale) => acc + sale.totalAmount, 0);

  return (
    <div className="sales-report-container">
      <Header />
      <h2 className="sales-report-title">Informe de Ventas</h2>

      {/* Resumen del total de boletas y monto acumulado */}
      <div className="summary-filter-container">
        <div className="sales-summary">
          <p>Total de boletas: <strong>{totalInvoices}</strong></p>
          <p>Monto total de ventas: <strong>{totalSales} CLP</strong></p>
        </div>

        <div className="sales-filter">
          <label htmlFor="filterType">Filtrar por:</label>
          <select
            id="filterType"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="id">ID de Pedido</option>
            <option value="date">Fecha</option>
            <option value="userId">ID Usuario</option>
          </select>
          <input
            type="text"
            placeholder="Ingresa el valor para filtrar"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </div>
      </div>

      <div className="table-container">
        <table className="sales-report-table">
          <thead>
            <tr>
              <th>ID de Pedido</th>
              <th>ID de Usuario</th> {/* Nueva columna para el ID del usuario */}
              <th>Productos</th>
              <th>Monto Total</th>
              <th>Fecha de compra</th>
            </tr>
          </thead>
          <tbody>
            {filteredSalesData.map((sale) => (
              <tr key={sale.id}>
                <td>{sale.id}</td>
                <td>{sale.userId}</td> {/* Mostrar el ID del usuario */}
                <td>
                  <ul className="sales-product-list">
                    {sale.products.map((product, i) => (
                      <li key={i}>
                        {product.name} {product.quantity ? `(${product.quantity}X)` : ''} - Monto: {product.amount} CLP
                      </li>
                    ))}
                  </ul>
                </td>
                <td><strong>{sale.totalAmount} CLP</strong></td>
                <td>{new Date(sale.date).toLocaleDateString('es-CL')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer username={username} /> {/* Pasar username al Footer */}
    </div>
  );
};

export default SalesReport;










