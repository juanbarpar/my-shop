import React from "react";
import "./Cart.css";

function Cart({ cart }) {
    const total = cart.reduce((acc, product) => acc + product.price, 0);
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="cart-item">
              <img
                src={product.image}
                alt={product.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{product.title}</h3>
                <p>Precio: ${product.price}</p>
              </div>
            </li>
          ))}
          <p>Total: ${total.toFixed(2)}</p>
        </ul>
        
      )}
    </div>
    
  );
}

export default Cart;
