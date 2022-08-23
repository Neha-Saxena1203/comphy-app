import React, { useEffect, useReducer, createContext, useContext } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  COUNT_CART_TOTALS,
  CLEAR_CART,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const getLocalStorage = () => {
  const cart = localStorage.getItem("cart");

  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispacth] = useReducer(reducer, initialState);

  const add_To_Cart = (id, color, amount, product) => {
    dispacth({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  const remove_cart_item = (id) => {
    dispacth({ type: REMOVE_CART_ITEM, payload: id });
  };

  const clear_cart = () => {
    dispacth({ type: CLEAR_CART });
  };

  const toggleCartAmount = (id, value) => {
    dispacth({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };

  useEffect(() => {
    dispacth({ type: COUNT_CART_TOTALS });

    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        add_To_Cart,
        remove_cart_item,
        clear_cart,
        toggleCartAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
