import { createContext, ReactNode, useState } from 'react';
import Produto from '../models/Produto';
import { toastAlerta } from "../utils/toastAlerta"

interface ProductProps {
  produto: Produto;
  quant: number;
}

interface CartContextProps {
  productCart: Array<Produto>;
  addProductToCart: (produto: Produto) => void;
  totalCart: () => void;
  clearCartCompra: () => void;
  clearCartDoa: () => void;
}

export const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [productCart, setProductCart] = useState<any[]>([]);

  const addProductToCart = (produto: Produto) => {
    const isProductInCart = productCart.some((item) => item.id === produto.id);
    if(isProductInCart){
      toastAlerta("Este produto ja esta no carrinho.", "erro")
    } else {
      setProductCart([...productCart, produto]);
      toastAlerta("Produto adicionado ao carrinho!", "sucesso")
    }
  };

  const totalCart = () => {
    const total = productCart.reduce((accumulator, produto) => accumulator + produto.preco, 0);
    return total
  };

  const clearCartCompra = () => {
    setProductCart([]);
    toastAlerta("Compra realizada com sucesso!", "sucesso")
    
  };

  const clearCartDoa = () => {
    setProductCart([]);
    toastAlerta("Doação realizada com sucesso!", "sucesso")
    
  };

  return (
    <CartContext.Provider
      value={{ addProductToCart, totalCart, clearCartCompra, clearCartDoa, productCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;