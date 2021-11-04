import React from 'react';
import {Weather} from './features/project/Weather'
import './App.css';
import { Wrapper} from "@googlemaps/react-wrapper";
import { Marker } from './features/project/Marker';


// const render = (status) => {
//   if (status === Status.LOADING) return <h3>{status} ..</h3>;
//   if (status === Status.FAILURE) return <h3>{status} ...</h3>;
//   return null;
// };


function App() {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;


  
  return (
    <Wrapper apiKey={"AIzaSyDZaOYq8-wsulwTlpwqfCLX2hp4HcPPx7c"} >
      <Weather center={center} zoom={zoom}>
        <Marker />
      </Weather>
    </Wrapper > 
  );
}
export default App;
