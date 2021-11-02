import React, { useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectWeather, weatherAsync} from './weatherSlice'


export function Weather({
        center,
        zoom,
      }: {
        center: google.maps.LatLngLiteral;
        zoom: number;
      } ){
      
        const ref = useRef();
    const weather = useSelector(selectWeather)
    console.log(weather)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(weatherAsync({query : 'Brest'}))
    }, [dispatch])

    useEffect(() => {
        new window.google.maps.Map(ref.current, {
          center,
          zoom,
        });
      });

    if(Object.keys(weather).length){
        return( <div>
  <input type='text'></input>
            <p>{weather.location.name}</p>
            <div ref={ref} id="map" />
        </div>
          
        )
    }else{
        return(
            <h1>error</h1>
        )
    }  
}


git hub = https://github.com/googlemaps/react-wrapper/blob/main/examples/basic.tsx
npm maps = https://www.npmjs.com/package/@googlemaps/react-wrapper
docimentation = https://developers.google.com/maps/documentation/javascript/react-map
console = https://console.cloud.google.com/appengine/start/reception?project=lunar-reef-330320&hl=ru