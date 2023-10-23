import React, { createContext, ReactNode, useState } from "react";

interface Product {
  id: number;
  qtd: number;
}

interface CartContextProps {
  productsCart: Product[];
  addProductToCart: (id: number) => void;
  removeProductToCart: (id: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({children}: CartProviderProps) {
  const [productsCart, setProductsCart] = useState<Product[]>([]);

  const addProductToCart = (id: number) => {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((product) => product.id === id);

    if (!item) {
      copyProductsCart.push({ id: id, qtd: 1 });
    } else {
      item.qtd = item.qtd + 1;
    }

    setProductsCart(copyProductsCart);
  };

  const removeProductToCart = (id: number) => {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((product) => product.id === id);

    if (item && item.qtd > 1) {
      item.qtd = item.qtd - 1;
      setProductsCart(copyProductsCart);
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (product) => product.id !== id
      );
      setProductsCart(arrayFiltered);
    }
  };

  const clearCart = () => {
    setProductsCart([]);
  };

  return (
    <CartContext.Provider
      value={{ productsCart, addProductToCart, removeProductToCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;