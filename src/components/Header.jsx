import React from 'react';
import { Link } from 'react-router-dom';
import './styles/components/Header.css';

export const Header = () => {
   return (
      <div className="Header">
         <Link to="/">
            <h1 className="Header-title">PlatziConf Merch</h1>
         </Link>
         <Link className="Header-checkout" to="/checkout">
            <i className="fa-sharp fa-solid fa-bag-shopping"></i>
         </Link>
      </div>
   );
};
