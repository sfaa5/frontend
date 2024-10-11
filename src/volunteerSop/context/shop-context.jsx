


import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5555/Cdonation');
        setProducts(response.data.data);
        console.log(cartItems)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchData();
  }, []);

  const getTotalCartAmount = () => {
    return cartItems.reduce((total, item) => {
      const itemInfo = products.find(product => product._id === item.id);
      return total + (itemInfo ? itemInfo.points * item.quantity : 0);
    }, 0);
  };


  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const existingItem = prev.find(item => item.id === itemId);
      console.log(existingItem);
  
      if (existingItem) {
        const quanProd = products.find(p => p._id === itemId);
        if (quanProd && existingItem.quantity < quanProd.quantity) {
     
          return prev.map(item =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
          );
        }else {
          return [...prev ];

        }
      }
  
      return [...prev, { id: itemId, quantity: 1 }];
    });
  };
  

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const existingItem = prev.find(item => item.id === itemId);
      if (existingItem.quantity > 1) {
        return prev.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prev.filter(item => item.id !== itemId);
      }
    });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => 
      prev.map(item =>
        item.id === itemId ? { ...item, quantity: newAmount } : item
      )
    );
  };

  const checkout = async () => {
    try {
      const requests = cartItems.map(item =>
        axios.put(`http://localhost:5555/Cdonation/${item.id}`,{ quantity: item.quantity })
      );
      
      await Promise.all(requests);
      console.log("checkout")
      setCartItems([]);
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    products,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};