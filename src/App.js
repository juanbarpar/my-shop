import React, { useState, useEffect } from "react";
import Stock from "./stock";
import Product from "./product";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "women's clothing", "electronics", "jewelery", "men's clothing"]; // Define las categorías aquí

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al obtener los productos", error));
  }, []);

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
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;

