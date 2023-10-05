import React, { useState, useEffect } from "react";
import './Header.css';

const Header = ({ categories, selectedCategory, setSelectedCategory }) => {


  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/4')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  if (!user) {
    return null; 
  }

  const initials = user.name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('');




  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="header">
      
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
      <div className="user-circle">{initials}</div>
    </div>
  );
}

export default Header;





