import React, { useState } from 'react';
import {Weather} from './features/project/Weather'
import './App.css';
import { Wrapper} from "@googlemaps/react-wrapper";
import { Marker } from './features/project/Marker';
import { Map } from './features/project/Map';
import Three from './features/project/Three';

function App() {
  const [clicks, setClicks] = useState([])
  const [zoom] = useState(4)
  const [center] = useState({lat:0, lng:0})

  const onClick = (e) => {
    setClicks([...clicks,   {lat: e.lat(), lng: e.lng()}]);
  };
  
  // console.log(clicks)

  return (
    <Wrapper apiKey={"AIzaSyDZaOYq8-wsulwTlpwqfCLX2hp4HcPPx7c"} >
      <Weather />
      <Three/>
      <Map 
        center={center}
        onClick={onClick}
        zoom={zoom}
        style={{ flexGrow: '1', height: '100%' }}
        >
          {clicks.map((latlng,  i) => (
            <Marker key={i} latlng={ latlng}   />
           ))}
      </Map>
    </Wrapper > 
  );
}
export default App;
