// App.js
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Importa los componentes necesarios
import Home from './Home'; // Asegúrate de que el componente Home esté importado
import Cart from './Cart'; // Asegúrate de que el componente Cart esté importado
import SalesReport from './SalesReport';
import Perfil from './Perfil';
import Products from './Product';
import Inventory from './Inventory';  // Asegúrate de que el componente SalesReport esté importado

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para manejar el inicio de sesión

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticación básica
    if ((username === 'usuario' || username === 'admin') && password === 'contraseña') {
      setIsLoggedIn(true); // Cambia el estado de autenticación a verdadero
    } else {
      alert('Credenciales incorrectas'); // Mensaje si las credenciales son incorrectas
    }
  };

  return (
    <Router> {/* Envuelve la aplicación con Router */}
      <div className="App">
        {!isLoggedIn ? (
          <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="input-container">
                <label htmlFor="username">Usuario</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Ingresa tu usuario"
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa tu contraseña"
                  required
                />
              </div>
              <button type="submit" className="login-button">Login</button>
              <button className="create-account-button" disabled>Crear Cuenta</button>
            </form>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home username={username} />} /> {/* Ruta para Home */}
            <Route path="/cart" element={<Cart username={username} />} /> {/* Ruta para Cart */}
            <Route path="/perfil" element={<Perfil />} /> {/* Ruta para el Informe de Ventas */}
            <Route path="/SalesReport" element={<SalesReport/>} /> {/* Redirige a Home si la ruta no es válida */}
            <Route path="/product" element={<Products />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;









