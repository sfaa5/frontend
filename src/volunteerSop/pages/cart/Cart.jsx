import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
import { useGlobalcontext } from "../../../context/globalContext";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout,products } = useGlobalcontext();
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();


  const itemsInCart = products.filter(product => {
    const cartItem = cartItems.find(item => item.id === product._id);
    return cartItem && cartItem.quantity !== 0;
  });

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
      {itemsInCart.map(product => (
          <CartItem key={product._id}   data={product} />
        ))}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              // navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
