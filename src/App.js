import React, { useState, useEffect } from "react";
import Stock from "./stock";
import Product from "./product";
import Cart from "./Cart"; // Nuevo componente para mostrar el carrito
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]); // Estado para el carrito de compras
  const categories = ["all", "women's clothing", "electronics", "jewelery", "men's clothing"];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al obtener los productos", error));
  }, []);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      
      <Routes>
        <Route
          path="/"
          element={<Stock products={products} selectedCategory={selectedCategory} />}
        />
        <Route path="/products/:id" element={<Product addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} /> 
      </Routes>
    </div>
  );
}

export default App;


