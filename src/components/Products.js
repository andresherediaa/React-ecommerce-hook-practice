import React, { useContext } from 'react';
import { Product } from './Product';
import './styles/components/Products.css';
import AppContext from './../context/AppContext';

export const Products = () => {
   const { state, addToCart } = useContext(AppContext);
   const { products } = state;

   const handleAddToCart = (product) => {
      addToCart(product);
   };
   return (
      <div className="Products">
         <div className="Products-items">
            {products.map((product) => {
               return (
                  <Product
                     product={product}
                     handleAddToCart={handleAddToCart}
                     key={product.id}
                  />
               );
            })}
         </div>
      </div>
   );
};
