import React , {useContext} from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from "../../context/shop-content"
import  CartItem  from './cart-item'
import './cart.css'

export default function Cart  () {
  const {cardItems , getToatalAmount} = useContext(ShopContext)
  const totalAmount= getToatalAmount()
  return (
    <div className='cart'>
      <div>
        <h1>Your Card Item</h1>
      </div>
      <div className='CartItem'>
      {PRODUCTS.map((product) => {
         if (cardItems[product.id] !== 0 ) {
          return <CartItem data={product}/>
        }
      })}
        
      </div>

      <div className="checkout">
        <p>Subtotal : ${totalAmount}</p>
        <button> Continue Shopping</button>
        <button>Check out</button>
      </div>
    </div>
  )
}

