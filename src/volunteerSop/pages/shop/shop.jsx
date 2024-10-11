import React, { useContext, useEffect, useState } from "react";
// import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { ProductList } from "../cart/cart-item";
import axios from "axios";

import { useGlobalcontext } from "../../../context/globalContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
export const Shop = () => {
  const [data, setData] = useState([]);
  const [ Cdonations , setCdonations ] = useState([]);
  const{needy,getDonation,    getClothing,
    getElectronics,
    getToys,
    getBooks,
    HomeEssentials,  Donation,clothing,electronics,HomeEssential,books,toys}=useGlobalcontext()

    console.log(needy.user.points)

useEffect(() => {
  getDonation();
  getClothing()
  getElectronics()
  getToys()
  getBooks()
  HomeEssentials()
  setCdonations(Donation)
}, []);


  // ProductList();
  return (
    <div className="shop">
<hr class="line" style={{
    width: "100%",
    color: "black",
    height: "2px",
    backgroundColor: "black",
}}></hr>

<div style={{size:"30px"}}  >your points : {needy.user.points}</div>
<div className="collect">
<button type="button" class="add_ " onClick={()=>{setCdonations(Donation)}}>All Donations</button>
            <button onClick={()=>{setCdonations(HomeEssential)}} type="button" class="add_ ">Home Essentials</button>  
            <button onClick={()=>setCdonations(electronics) } type="button" class="add_ ">Electronics</button>  
            <button onClick={()=>{setCdonations(toys)} } type="button" class="add_ ">Toys</button> 
            <button type="button" onClick={()=>{setCdonations(books)} } class="add_ ">Books</button>
            <button onClick={()=>{setCdonations(clothing)}} type="button" class="add_ ">Clothing</button> 


            <Link style={{marginLeft:"250px"}} to="/cart">
            <FaShoppingCart size={32} />
          </Link>
    </div>
   


      <div className="products">
        {Cdonations.map((product) => (
          <Product setCdonations={setCdonations}  data={product} />
        ))}
      </div>
    </div>
  );
};
