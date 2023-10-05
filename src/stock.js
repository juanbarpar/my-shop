import React, { useState, useEffect } from "react";
import './Items.css'; 
import { Link } from "react-router-dom";

function Stock({ products, selectedCategory }) {
  const [startIndex, setStartIndex] = useState(0);
  const [showAll, setShowAll] = useState(false); 


  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter((product) => product.category === selectedCategory);


  const productsToDisplay = showAll ? filteredProducts : filteredProducts.slice(startIndex, startIndex + 4);
  

  useEffect(() => {
    setStartIndex(0); 
  }, [selectedCategory]);

  const handleShowMore = () => {
    setShowAll(true); 
  };

  return (
    <div className="product-container">
      <div className="product-grid">
        {productsToDisplay.map((product, index) => (
          <div key={index} className="product-item">
            <img width="150" src={product.image} alt={product.category} />
            <div className="info">
              <h3>
                <i>{product.title}</i>
              </h3>
              <h2 className="price">$ {product.price}</h2>
              <h3 className="category">{product.category}</h3>
            </div>
            <Link to={`products/${product.id}`}>Ver más...</Link>
          </div>
        ))}
      </div>
      {/* Renderiza el botón "Mostrar más" si hay más productos */}
      {startIndex + 4 < filteredProducts.length && (
        <button className="show-more-button" onClick={handleShowMore}>
          Mostrar más
        </button>
      )}
    </div>
  );
}

export default Stock;



