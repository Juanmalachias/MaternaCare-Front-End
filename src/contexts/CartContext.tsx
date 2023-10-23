import { createContext, ReactNode, useState } from 'react';
import Produto from '../models/Produto';

interface ProductProps {
  produto: Produto;
}

interface CartContextProps {
  productCart: Array<Produto>;
  addProductToCart: (produto: Produto) => void;
  removeProductToCart: (id: number) => void;
  clearCart: () => void;
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

  const clearCart = () => {
    setProductCart([]);
  };

  return (
    <CartContext.Provider
      value={{ addProductToCart, removeProductToCart, clearCart, productCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;