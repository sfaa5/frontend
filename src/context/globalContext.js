import React, { useState, useContext } from "react";
import {  useEffect } from "react";
import axios from "axios";

const globalContext = React.createContext();

const BASE_URL = 'http://localhost:5555/';

export const GlobalProvider = ({ children }) => {
  const [donor, setDonor] = useState("");
  const [needy,setNeedy]=useState("");
  const [token,setToken]=useState("");
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const[clothing,setClothing]= useState([])
  const[electronics,setElectronics]= useState([])
  const[HomeEssential,setHomeEssential]= useState([])
  const[books,setbooks]= useState([])
  const[toys,setToys]= useState([])
  const[Donation,setDonation]=useState([])

  


  const setLoginD = (user)=>{
    setDonor(user);
  
  }

  const setLoginN = (user)=>{
    setNeedy(user);
   
  }

  const setLogout =()=>{
    setDonor("")
    setNeedy("")
  }

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
        axios.put(`http://localhost:5555/Cdonation/${item.id}`,{ quantity: item.quantity})
      );
      
      await Promise.all(requests);
     

      await axios.put(`http://localhost:5555/needy/${needy.user._id}/points`,{points:needy.user.points})


      console.log("checkout")
      
      setCartItems([]);
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };


  /****************************donation*************************/

  const getDonation = async () => {
    const response = await axios.get(`${BASE_URL}Cdonation`)
    setDonation(response.data.data)
    console.log(response.data)
}

const getClothing = async () => {
    const response = await axios.get(`${BASE_URL}Cdonation/getCategory/Clothing`)
    setClothing(response.data.data)
    console.log(response.data)

}

const getElectronics = async () => {
    const response = await axios.get(`${BASE_URL}Cdonation/getCategory/Electronics`)
    setElectronics(response.data.data)
    console.log(response.data)
}

const getToys = async () => {
    const response = await axios.get(`${BASE_URL}Cdonation/getCategory/Toys`)
    setToys(response.data.data)
    console.log(response.data)
}

const getBooks = async () => {
    const response = await axios.get(`${BASE_URL}Cdonation/getCategory/Books`)
    setbooks(response.data.data)
    console.log(response.data)
}


const HomeEssentials  = async () => {
    const response = await axios.get(`${BASE_URL}Cdonation/getCategory/HomeEssentials`)
    setHomeEssential(response.data.data)
    console.log(response.data)
}


/**********Request******** */


const addRequest = async (request) => {
  const response = await axios.post(`${BASE_URL}Rdonation`, request)
      .catch((err) =>{
          console.log(err.response.data.message)
      })
  
}







  return (
    <globalContext.Provider
      value={{
        donor,
        setDonor,
        needy,
        setNeedy,
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
        products,
        setLoginN,
        setLoginD,
        setLogout,

        addRequest,
   
        getDonation,

        getClothing,
        getElectronics,
        getToys,
        getBooks,
        HomeEssentials,
        Donation,
        clothing,
        electronics,
        HomeEssential,
        books,
        toys,
      }}
    >
      {children}
    </globalContext.Provider>
  );

};
export const useGlobalcontext = () => {
  return useContext(globalContext);
};
