import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Header.css';

const Header = ({ categories, selectedCategory, setSelectedCategory }) => {
  const location = useLocation();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="header">

    <div className="navigation">
    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Inicio</Link>
    <Link to="/cart" className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`}>Carrito</Link>
  </div>
  
      <div className="category-filter">
        <label htmlFor="category">Filtrar por categoría:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>


    </div>
  );
}

export default Header;






