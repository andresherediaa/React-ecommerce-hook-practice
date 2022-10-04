import React from 'react';
import './styles/components/Checkout.css';

export const ListaPedidos = ({ cart, showPaymentButton }) => {
   return (
      <div className="Checkout-content">
         {cart.length > 0 ? <h3>Lista de Pedidos</h3> : <h3>Sin pedidos</h3>}
         {cart.map((product) => {
            return (
               <div className="Checkout-item" key={product.id}>
                  <h3>{product.title}</h3>
                  <span>$ {product.price}</span>
                  {showPaymentButton && (
                     <button
                        type="button"
                        onClick={() => handleRemove(product)}
                     >
                        <i className="fas fa-trash-alt"></i>
                     </button>
                  )}
               </div>
            );
         })}
      </div>
   );
};
