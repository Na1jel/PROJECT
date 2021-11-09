import React, { useEffect,  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectWeather, weatherAsync } from './weatherSlice'






export function Weather() {
  const weather = useSelector(selectWeather)
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(weatherAsync({ query: 'Brest' }))
  }, [dispatch])

if(Object.keys(weather).length){
    return (
     <div>
      <input type='text'/>
      {weather.location.name}
     </div>

    )}else{
      return(
  
        <div>Error</div>
       
      )
    }
  
}



// git hub = https://github.com/googlemaps/react-wrapper/blob/main/examples/basic.tsx
// npm maps = https://www.npmjs.com/package/@googlemaps/react-wrapper
// docimentation = https://developers.google.com/maps/documentation/javascript/react-map
// console = https://console.cloud.google.com/appengine/start/reception?project=lunar-reef-330320&hl=ru