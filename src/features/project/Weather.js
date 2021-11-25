import React, { useEffect, useState,  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectWeather, weatherAsync, selectCity} from './weatherSlice'
import './style/styleWeather.css'

export function Weather({click}) {
  const weather = useSelector(selectWeather)
  const dispatch = useDispatch();
  const [city, setCity] = useState('')
//  console.log("lox", click)

  const lat = click.map(lat=> lat.lat)
  const lon = click.map(lon=> lon.lng)
  const coordinatesWeather = {
    lat: lat,
    lon: lon
  }
  console.log(coordinatesWeather)
  
  useEffect(() => {
    dispatch(weatherAsync(coordinatesWeather))
  }, [dispatch, coordinatesWeather])


  function onSubmit(e){
    e.preventDefault();
  
  }

if(Object.keys(weather).length){
    return (
    <div className='weather'>
     <div className='search'>
        
         <input type='text' value={city} onChange={e => setCity(e.target.value)} />
       
      </div>
      <div className='info'>
        City:{weather.location.name}
        <h3>Weacher day</h3>
        <ul>
        {weather.forecast.forecastday.map(d =>
              <li key={d.key}> Date: {d.date} max-temp {d.day.maxtemp_c}  {d.day.mintemp_c} <img src={d.day.condition.icon}></img></li>
            )}
        </ul>
        
      </div>
    </div>
    )}else{
      return(
  
        <div>Error</div>
      )
    }
}