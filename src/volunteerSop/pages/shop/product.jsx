import React, { memo, useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useGlobalcontext } from "../../../context/globalContext";
export  const Product = memo(({data,setCdonations}) => {

  const { _id, name, points, image } = data;
  // const { addToCart, cartItems } = useGlobalcontext();
  const{  needy,addToCart, cartItems ,   Donation,clothing,electronics,HomeEssential,books,toys}=useGlobalcontext()
  console.log(cartItems)
  let cartItemCount = 0;

  cartItems.map((item) => {

    if (item.id === _id) {
      cartItemCount = item.quantity;
    }
    return cartItemCount;
  });

  const addToBOOK=async ()=>{
try{
  console.log(_id);
  
  await axios.put(`http://localhost:5555/Cdonation/${_id}`);
}catch(error) {
  console.error('Error fetching data:', error);
   
  }
    
  }


  return (
    <div className="product">
      <img src={`http://localhost:5555/Images/${image}`} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> {points} point</p>
      </div>
      <button className="addToCartBttn" onClick={  () =>{ if(points<=needy.user.points) needy.user.points -= points;  addToCart(_id)}}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
})
