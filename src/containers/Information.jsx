import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ListaPedidos } from '../components/ListaPedidos';
import AppContext from '../context/AppContext';
import './../components/styles/components/Information.css';

export const Information = () => {
   const { state, addToBuyer } = useContext(AppContext);
   const { cart } = state;
   const form = useRef(null);
   let navigate = useNavigate();
   const handleSubmit = () => {
      const formData = new FormData(form.current);
      const buyer = {
         name: formData.get('name'),
         email: formData.get('email'),
         address: formData.get('address'),
         apto: formData.get('apto'),
         city: formData.get('city'),
         country: formData.get('country'),
         state: formData.get('state'),
         cp: formData.get('cp'),
         phone: formData.get('phone'),
      };
      addToBuyer(buyer);
      navigate('/payment');
   };
   console.log('state', state);
   return (
      <div className="Information">
         <div className="Information-content">
            <div className="Information-head">
               <h2>Informacion de contacto:</h2>
            </div>
            <div className="Information-form">
               <form action="" ref={form}>
                  <input type="text" placeholder="Nombre" name="name" />
                  <input type="text" placeholder="Correo" name="email" />
                  <input type="text" placeholder="Direccion" name="address" />
                  <input type="text" placeholder="Apto" name="apto" />
                  <input type="text" placeholder="Ciudad" name="city" />
                  <input type="text" placeholder="Pais" name="country" />
                  <input type="text" placeholder="Estado" name="state" />
                  <input type="text" placeholder="Codigo postal" name="cp" />
                  <input type="text" placeholder="Telefono" name="phone" />
               </form>
            </div>
            {cart.length > 0 && (
               <div className="Information-buttons">
                  <Link to="/">Regresar</Link>
                  <div className="Information-next" onClick={handleSubmit}>
                     Pagar
                  </div>
               </div>
            )}
         </div>
         <div className="Information-sidebar">
            <ListaPedidos cart={cart}/>
         </div>
      </div>
   );
};
