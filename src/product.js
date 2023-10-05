import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './product.css'; // Asegúrate de importar el archivo CSS

function Product({ addToCart }) {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div className="product-container">
      {product ? (
        <>
          <h2>
            <i>{product.title}</i> por ${product.price}
          </h2>
          <img
            src={product.image}
            alt={product.category}
            className="product-image"
          />
          <p className="product-description">{product.description}</p>
          <button onClick={() => addToCart(product)}>Agregar al carrito</button> {/* Botón para agregar al carrito */}
          <Link to={"/"} className="back-link">
            Volver
          </Link>
        </>
      ) : (
        <div className="loading">Cargando...</div>
      )}
    </div>
  );
}

export default Product;

