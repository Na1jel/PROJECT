import React, { useState } from 'react';
import {Weather} from './features/project/Weather'
import './App.css';
import { Wrapper} from "@googlemaps/react-wrapper";
import { Marker } from './features/project/Marker';
import { Map } from './features/project/Map';
import {selectPosition, location} from './features/project/weatherSlice'
import { useSelector, useDispatch } from 'react-redux';

// import Three from './features/project/Three';
// import html2canvas from 'html2canvas';
// import Canvas from './features/project/Canvas';


function App() {
  const dispatch = useDispatch();
  const [clicks, setClicks] = useState()
  const [zoom] = useState(4)
  const [center] = useState({lat:0, lng:0})

  const onClick = (e) => {
    console.log(e)
    setClicks({lat:e.lat(), lng:e.lng()});
  };

  // console.log('click',clicks)

  return (
    <div className='styleWeather'>
    <Wrapper apiKey={"AIzaSyDZaOYq8-wsulwTlpwqfCLX2hp4HcPPx7c"}>
       {/* <Canvas/>   */}
       <Map className="Map"
        center={center}
        onClick={onClick}
        zoom={zoom}
        style={{ flexGrow: '1', height: '100%' }}
        >
            <Marker position={ clicks}   />
      </Map>
      <Weather coordinatesWeather = {clicks} /> 
      {/* <Three /> */}
    </Wrapper >
 
    </div>
  );
}
export default App;
