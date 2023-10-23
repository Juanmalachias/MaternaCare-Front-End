import React, { useContext, useState } from 'react'
import { CartProvider, CartContext } from '../../contexts/CartContext';

function Cart() {

  // const { productsCart, addProductToCart}
  // const [ product, setProductsCart] = useState(CartContext);
  const {productCart} = useContext(CartContext)
  const [qtd, setQtd] = useState(1)

  return(
    <>
      <div>
        {productCart.map((produto) => (
          <div>
            <p>{produto.nomeProduto}</p>
          <div>
            <button onClick={() => setQtd(prev => prev - 1)}>-</button>{qtd}<button onClick={() => setQtd(prev => prev + 1)}>+</button>
          </div>
          <p>{produto.preco * qtd}</p>
          </div>
        ))}
      </div>
    </>
  )
  
}

export default Cart;