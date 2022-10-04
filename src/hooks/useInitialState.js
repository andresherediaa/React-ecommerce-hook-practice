import React, { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
   const [state, setState] = useState(initialState);

   const addToCart = (payload) => {
      setState({
         ...state,
         cart: [...state.cart, payload],
      });
   };

   const removeFromCart = (payload) => {
      const cartData = [...state.cart];
      let newCart = cartData.filter((data) => data.id !== payload.id);
      setState({
         ...state,
         cart: newCart,
      });
   };
   const addToBuyer = (payload) => {
      setState({
         ...state,
         buyer: payload,
      });
   };
   const addNewOrder = (payload) => {
      setState({
         ...state,
         orders: [...state.orders, payload],
      });
   };

   return {
      addToCart,
      removeFromCart,
      addToBuyer,
      addNewOrder,
      state,
   };
};

export default useInitialState;
