import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './../components/styles/components/app.css';
import { Home } from '../containers/Home';
import { Checkout } from '../containers/Checkout';
import { Information } from './../containers/Information';
import { Payment } from './../containers/Payment';
import { Success } from './../containers/Success';
import { NotFound } from './../containers/NotFound';
import { Layout } from './../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from './../hooks/useInitialState';

const App = () => {
   const initialState = useInitialState();
   return (
      <AppContext.Provider value={initialState}>
         <BrowserRouter >
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="information" element={<Information />} />
                  <Route path="payment" element={<Payment />} />
                  <Route path="success" element={<Success />} />
                  <Route path="*" element={<NotFound />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </AppContext.Provider>
   );
};

export default App;
