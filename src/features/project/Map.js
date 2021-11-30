import React, { useEffect, useRef,useState } from 'react';
import "./style/styleMap.css"
import Canvas from './Canvas'

export function Map({
    zoom, 
    onClick,
    children
}){
    const [map, setMap] = useState(false);
    const ref = useRef();
    
    useEffect(() => {
        console.log('map')
        setMap(new window.google.maps.Map(ref.current, {
          center :{ lat: 52.1, lng: 23.7 },
          zoom,
          // addMapType: 'G_SATELLITE_3D_MAP'
          mapTypeId: window.google.maps.MapTypeId.ROADMAP
        }));
      },[ref, zoom]);
       
  useEffect(() => {
    if (map) {
      window.google.maps.event.clearListeners(map, 'click');
      map.addListener("click", coordinates);
    }
  },[map])

  function coordinates (e) {
    onClick(e.latLng)
  }

  return (
    <div>
     
      <div ref={ref} id="map"  />
      <form>
        <input type='number' name="lat"  onChange={coordinates}/> 
      </form>
       { React.Children.map( children,(child) => {
        return React.cloneElement(child, { map }); }
       )}
     
    </div>)
}


//https://www.npmjs.com/package/canvas#loadimage
//https://gist.github.com/viktorkelemen/1451945
//https://coderoad.ru/5706129/HTML5-Canvas-%D0%BC%D0%B5%D1%82%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-Google-Maps-API-v3