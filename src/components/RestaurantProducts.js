import React, { useState } from 'react';
import './RestaurantProducts.css';

const RestaurantProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  
  const categories = ['Todas', 'Comida Rápida', 'Postres', 'Bebidas', 'Ensaladas'];

  const products = [
    { id: 1, name: 'Pizza Margherita', category: 'Comida Rápida', price: '$10.99', image: 'https://images.pexels.com/photos/4109122/pexels-photo-4109122.jpeg?auto=compress&cs=tinysrgb&h=350', available: true },
    { id: 2, name: 'Spaghetti Carbonara', category: 'Comida Rápida', price: '$12.50', image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&h=350', available: true },
    { id: 3, name: 'Tiramisu', category: 'Postres', price: '$6.00', image: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&h=350', available: false },
    { id: 4, name: 'Café Espresso', category: 'Bebidas', price: '$2.50', image: 'https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg?auto=compress&cs=tinysrgb&h=350', available: true },
    { id: 5, name: 'Ensalada César', category: 'Ensaladas', price: '$9.99', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=350', available: true },
    { id: 6, name: 'Panini de Jamón', category: 'Comida Rápida', price: '$8.50', image: 'https://images.pexels.com/photos/693740/pexels-photo-693740.jpeg?auto=compress&cs=tinysrgb&h=350', available: true },
    { id: 7, name: 'Cheesecake', category: 'Postres', price: '$5.00', image: 'https://www.allrecipes.com/thmb/DHosjm3NundSDP1q6wWEEECYwr8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8419-easy-sour-cream-cheesecake-DDMFS-beauty-4x3-BG-2747-44b427d330aa41aa876269b1249698a0.jpg', available: false },
    { id: 8, name: 'Batido de Fresa', category: 'Bebidas', price: '$4.00', image: 'https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg?auto=compress&cs=tinysrgb&h=350', available: true },
    { id: 9, name: 'Brownie', category: 'Postres', price: '$3.00', image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&h=350', available: true },
    { id: 10, name: 'Hamburguesa Vegana', category: 'Comida Rápida', price: '$11.99', image: 'https://juanllorca.com/wp-content/uploads/2020/05/IMG_1979-1-scaled.jpeg', available: false },
    { id: 11, name: 'Sopa de Tomate', category: 'Ensaladas', price: '$7.50', image: 'https://images.pexels.com/photos/5949897/pexels-photo-5949897.jpeg?auto=compress&cs=tinysrgb&h=350', available: true },
    { id: 12, name: 'Bebida Energética', category: 'Bebidas', price: '$3.50', image: 'https://images.pexels.com/photos/1571263/pexels-photo-1571263.jpeg?auto=compress&cs=tinysrgb&h=350', available: true },
];
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'Todas'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleLogout = () => {
    // Lógica para cerrar sesión (ejemplo: redirigir al login)
    window.location.href = '/login'; // Esto te lleva de vuelta al login
  };

  return (
    <div className="restaurant-container">
      {/* Menú de Categorías */}
      <nav className="navbar">
        <ul className="categories-menu">
          {categories.map((category) => (
            <li key={category} onClick={() => handleCategoryChange(category)} className={selectedCategory === category ? 'active' : ''}>
              {category}
            </li>
          ))}
        </ul>
        <button className="logout-btn" onClick={handleLogout}>Cerrar Sesión</button>
      </nav>

      <h1>{selectedCategory === 'Todas' ? 'Todos los Productos' : `Categoría: ${selectedCategory}`}</h1>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className={`product-card ${!product.available ? 'out-of-stock' : ''}`}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            {product.available ? (
              <button className="order-btn">Ordenar Pedido</button>
            ) : (
              <button className="order-btn" disabled>Agotado</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantProducts;
