// Home.js
import React from 'react';
import Slider from 'react-slick';
import Header from './Header';
import Footer from './Footer';
import './Home.css';

const featuredProducts = [
  { id: 1, name: 'Triciclo Azul', price: 20000, imageUrl: '/images/triciclo-azul.jpg' },
  { id: 2, name: 'Triciclo Verde', price: 22000, imageUrl: '/images/triciclo-verde.jpg' },
  { id: 3, name: 'Triciclo Rojo', price: 21000, imageUrl: '/images/triciclo-rojo.jpg' },
  { id: 4, name: 'Triciclo Amarillo', price: 18000, imageUrl: '/images/triciclo-amarillo.jpg' },
];

const Home = () => {
  // Simulación de un nombre de usuario, este valor debería venir de tu contexto o estado de autenticación
  const username = 'admin'; // Cambia esto según la lógica de tu aplicación

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home-container">
      <Header />

      <div className="content">
        {/* Carrusel de Productos Destacados */}
        <h2 className="h2-card">Productos Destacados</h2>
        <div className="carousel-container">
          <Slider {...settings}>
            {featuredProducts.map(product => (
              <div key={product.id} className="card">
                <img src={product.imageUrl} alt={product.name} className="carousel-image" />
                <h3>{product.name}</h3>
                <p>Precio: ${product.price}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Pasar username al Footer */}
      <Footer username={username} />
    </div>
  );
};

export default Home;




















