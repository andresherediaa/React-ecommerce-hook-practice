import React, { useContext, useState } from 'react';
import Map from '../components/Maps';
import AppContext from '../context/AppContext';
import './../components/styles/components/Success.css';
import { useLocation } from './../hooks/useLocation';

export const Success = () => {
   const { state } = useContext(AppContext);
   const { buyer } = state;
   const [address, setAddress] = useState(
      buyer.address + ',' + buyer.city + ',' + buyer.country
   );
   const { location } = useLocation(address);

   return (
      <div className="Success">
         <div className="Success-content">
            <h3>Gracias {buyer.name} por tu compra</h3>
            <span>Tu pedido llegara en 3 dias</span>
            <div className="Success-maps">
               <Map location={location} />
            </div>
         </div>
      </div>
   );
};
