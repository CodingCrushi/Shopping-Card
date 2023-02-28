import React, { createContext, useState } from 'react'
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null)

const getDefualtCard = () =>{ //Numers we used in the how many items you take
  let cart = {};
  for(let i = 0 ; i < PRODUCTS.length ; i++){
    cart[i] = 0 //start from which number
  }
  return cart
}

export const ShopContextProvider = (props) => {
  const [cardItems , setCardItems] = useState(getDefualtCard())

  const addToCard = (itemId) => {
    setCardItems((prev) => ({...prev , [itemId]: prev[itemId] + 1})); //This the item id  or key 1 : 2 value 
  }

  const removeFromCart = (itemId) => {
    setCardItems((prev) => ({...prev , [itemId]: prev[itemId] - 1})); //worked as same as top
  }

  const contextValue = { cardItems , addToCard , removeFromCart}


  return (
  <ShopContext.Provider value={contextValue}>
    {props.children}
  </ShopContext.Provider>)
}
