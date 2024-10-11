import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalcontext } from "../../../context/globalContext";
let storedProducts = [];

// export const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = 
//           await axios
//             .get("http://localhost:3001/")
//             .then((response) => {
//               console.log(response.data);
//             })
//             .catch((error) => {
//               console.error(error);
//             });
//         setProducts(response);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);
// };
// export default storedProducts;

export const CartItem = (props) => {
  const { _id, name, points, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
  useGlobalcontext();
    
const quan=cartItems.find(C=>C.id===_id)


  return (
    <div className="cartItem">
      <img src={`http://localhost:5555/Images/${image}`} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> points: {points}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(_id)}> - </button>
          <input
            value={quan.quantity}
            onChange={(e) => updateCartItemCount(Number(e.target.value), _id)}
          />
          <button onClick={() => addToCart(_id)}> + </button>
        </div>
      </div>
    </div>
  );
};
