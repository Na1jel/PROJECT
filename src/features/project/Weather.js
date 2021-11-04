import React, { useEffect, useRef,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectWeather, weatherAsync } from './weatherSlice'
import "./style/styleMap.css"





export function Weather({
  center,
  zoom,
}) {
  const weather = useSelector(selectWeather)
  const dispatch = useDispatch();
  const [map, setMap] = useState(false);
  const ref = useRef();
  
  useEffect(() => {
    console.log('map')
    setMap(new window.google.maps.Map(ref.current, {
      center :{ lat: 41.85, lng: -87.64 },
      zoom,
    }));
  },[ref, zoom]);
 
  useEffect(() => {
    if (map) {
      window.google.maps.event.clearListeners(map, 'click');
      map.addListener("click", coordinates);
    }
  },[map])


  useEffect(() => {
    dispatch(weatherAsync({ query: 'Brest' }))
  }, [dispatch])


  function coordinates (e) {
    console.log(e.latLng.lat(), e.latLng.lng())
  }


// if(Object.keys(weather).length){
    return (
      <div>
        <div ref={ref} id="map" onChange={coordinates} />
      </div>)

    // )}else{
    //   return(<div>
    //     <div>Error</div>
    //     <div ref={ref} id="re" />
    //     </div>
    //   )
    // }
  
}



// git hub = https://github.com/googlemaps/react-wrapper/blob/main/examples/basic.tsx
// npm maps = https://www.npmjs.com/package/@googlemaps/react-wrapper
// docimentation = https://developers.google.com/maps/documentation/javascript/react-map
// console = https://console.cloud.google.com/appengine/start/reception?project=lunar-reef-330320&hl=ru