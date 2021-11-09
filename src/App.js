import React, { useState } from 'react';
import {Weather} from './features/project/Weather'
import './App.css';
import { Wrapper} from "@googlemaps/react-wrapper";
import { Marker } from './features/project/Marker';
import { Map } from './features/project/Map';

function App() {
  const [clicks, setClicks] = useState([])
  const [zoom, setZoom] = useState(4)
  const [center, setCenter] = useState({lat:0, lng:0})

  const onClick = (e) => {
    setClicks([...clicks,   !window.maps.MapMouseEvent.e.latLng.lng()]);
    
  };
  


  return (
    <Wrapper apiKey={"AIzaSyDZaOYq8-wsulwTlpwqfCLX2hp4HcPPx7c"} >
      <Weather />
      <Map 
        center={center}
        onClick={onClick}
        zoom={zoom}
        style={{ flexGrow: '1', height: '100%' }}
        >
          {clicks.map((latLng, i) => (
            <Marker position={{ lat: 9.761927, lng: 79.95244 }} />
           ))}
      </Map>
    </Wrapper > 
  );
}
export default App;
