import React, { useState } from 'react'
import { CartProvider, CartContext } from '../../contexts/CartContext';

function Cart() {

  const { productsCart, addProductToCart}
  const [ product, setProductsCart] = useState(CartContext);
  const [ produtos, setProduto ] = useState<Produto[]>([])

  return(
    <>
      <div>
        
      </div>
    </>
  )
  
}

export default Cart;