import React, { useState } from 'react';
import {Weather} from './features/project/Weather'
import './App.css';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Marker } from './features/project/Marker';
import { Map } from './features/project/Map';

const render = (status) => {
  return <h1>{status}</h1>;
};

const App = () => {
  const [clicks, setClicks] = useState([]);
  const [zoom, setZoom] = useState(3);
  const [center, setCenter] = useState({lat: 25,lng: 54,});
  const [coordinatesWeather, setCoordinatesWeather]= useState()

  const onClick = (e) => {
 
    setClicks([...clicks, e.latLng]);
    setCoordinatesWeather({lat:e.latLng.lat(), lng:e.latLng.lng()})
  };

 
  return (
    <div>
      <Wrapper apiKey={"AIzaSyDZaOYq8-wsulwTlpwqfCLX2hp4HcPPx7c"} render={render}>
        <Map
          center={center}
          onClick={onClick}
          zoom={zoom}
        >
          {clicks.map((latLng, i) => (
            <Marker key={i} position={latLng} />
          ))}
        </Map>
        <Weather   onClick={onClick} coordinatesWeather={coordinatesWeather}/>
      </Wrapper>
      <button onClick={() => setClicks([])}>Clear</button>
    </div>
  );
};
export default App;
