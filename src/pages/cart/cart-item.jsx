import React from 'react'

export default function CartItem(props) {
    const {productName , price , productImage} = props.data ;

  return (
    <div className='cartItem'>
        <img src={productImage} alt="" />
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
        </div>

    </div>
  )
}
