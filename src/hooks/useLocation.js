import React, { useState, useEffect } from 'react';

export const useLocation = (address) => {
   const [location, setLocation] = useState({});
   useEffect(() => {
      const getLocation = async () => {
         const location = await fetch(
            `http://api.positionstack.com/v1/forward?access_key=${process.env.GOOGLE_API_KEY}&query=${address}`
         );
         const results = await location.json();
         setLocation(results.data[0]);
      };
      getLocation();
   }, []);

   return { location };
};
