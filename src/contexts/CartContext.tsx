import { createContext, ReactNode, useState } from 'react';
import Produto from '../models/Produto';
import { toastAlerta } from "../utils/toastAlerta"

interface ProductProps {
  produto: Produto;
}

interface CartContextProps {
  productCart: Array<Produto>;
  addProductToCart: (produto: Produto) => void;
  removeProductToCart: (id: number) => void;
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
    setProductCart([...productCart, produto]);
  };

  const removeProductToCart = (id: number) => {
    const copyProductsCart = [...productCart];

    const item = copyProductsCart.find((product) => product.id === id);

    if (item && item.qtd > 1) {
      item.qtd = item.qtd - 1;
      setProductCart(copyProductsCart);
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (product) => product.id !== id
      );
      setProductCart(arrayFiltered);
    }
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
      value={{ addProductToCart, removeProductToCart, clearCartCompra, clearCartDoa, productCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;