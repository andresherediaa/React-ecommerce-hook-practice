import React, { useContext } from 'react';
import './../components/styles/components/Payment.css';
import AppContext from './../context/AppContext';
import { PayPalButton } from 'react-paypal-button';
import { useNavigate } from 'react-router-dom';
export const Payment = () => {
   const { state, addNewOrder } = useContext(AppContext);
   const { cart, buyer } = state;
   const navigate = useNavigate();
   const paypalOptions = {
      clientId: process.env.PAYPAL_CLIENT_ID,
      intent: 'capture',
      currency: 'USD',
   };

   const buttonStyles = {
      layout: 'vertical',
      shape: 'rect',
   };

   const handlePaymentSuccess = (data) => {
      if (data.status === 'COMPLETED') {
         const newOrder = {
            buyer,
            product: cart,
            payment: data,
         };
         addNewOrder(newOrder);
         navigate('/success');
      }
   };
   return (
      <div className="Payment">
         <div className="Payment-content">
            <h3>Resuemen de Pedido</h3>
            {cart.map((item) => {
               return (
                  <div className="Product-item" key={item.id}>
                     <div className="Payment-element">
                        <h4>{item.title}</h4>
                        <span>$ {item.price}</span>
                     </div>
                  </div>
               );
            })}
            <div className="Payment-button">Boton de pago con paypal</div>
            <PayPalButton
               paypalOptions={paypalOptions}
               buttonStyles={buttonStyles}
               amount={1.0}
               onPaymentStart={() => console.log('paymentStart')}
               onPaymentSuccess={(data) => handlePaymentSuccess(data)}
               onPaymentError={(data) => console.log('Error', data)}
               onPaymentCancel={(data) =>
                  console.log('Cancel', data)
               }
            />
         </div>
      </div>
   );
};
