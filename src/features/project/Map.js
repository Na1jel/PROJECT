import React, { useEffect, useRef,useState } from 'react';
import "./style/styleMap.css"


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
          addMapType: 'G_SATELLITE_3D_MAP'
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