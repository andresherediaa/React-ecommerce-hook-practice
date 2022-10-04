import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import './styles/components/Map.css';

export const Map = ({ location }) => {
   const [latitude, setLatitude] = useState();
   const [longitude, setLongitude] = useState();

   useEffect(() => {
      setLatitude(location.latitude);
      setLongitude(location.longitude);
   }, [location.latitude]);

   if (latitude && longitude) {
      return (
         <div className="map__container">
            <MapContainer center={[latitude, longitude]} zoom={15}>
               <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               <Marker position={[latitude, longitude]}></Marker>
            </MapContainer>
         </div>
      );
   }
   return <div>Cargando Direccion...</div>;
};

export default Map;
