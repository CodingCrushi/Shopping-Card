import React, { useContext } from 'react'
import { ShopContext } from "../../context/shop-content"

export default function Product(props) {
    const {id , productName , price , productImage} = props.data ;
    const { addToCard} = useContext(ShopContext)
  return (
    <div className='product'>
        <img src={productImage} alt="" />
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={() => addToCard(id)}>
          Add To Cart</button>
    </div>
  )
}
