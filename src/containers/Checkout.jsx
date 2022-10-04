import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ListaPedidos } from '../components/ListaPedidos';
import './../components/styles/components/Checkout.css';
import AppContext from './../context/AppContext';

export const Checkout = () => {
   const { state, removeFromCart } = useContext(AppContext);
   const { cart } = state;

   const handleRemove = (product) => {
      removeFromCart(product);
   };

   const handleSumTotal = () => {
      let reducer = (acummulator, currentValue) =>
         acummulator + currentValue.price;
      const sum = cart.reduce(reducer, 0);
      return sum;
   };
   return (
      <div className="Checkout">
         <ListaPedidos cart={cart} showPaymentButton={true} />
         {cart.length > 0 && (
            <div className="Checkout-sidebar">
               <h3>Precio total: $ {handleSumTotal()}</h3>
               <Link to="/information">
                  <button type="button">continuar..</button>
               </Link>
            </div>
         )}
      </div>
   );
};
