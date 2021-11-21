import React, { useEffect, useState,  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectWeather, weatherAsync, selectCity} from './weatherSlice'
import './style/styleWeather.css'

export function Weather({clicks}) {
  const weather = useSelector(selectWeather)
  // const name = useSelector(selectCity)
  const dispatch = useDispatch();
  const coordinatesWeather = useState({lat: 0, lon:0})
  const [city, setCity] = useState('')
 console.log("lox", clicks)
  
  useEffect(() => {
    dispatch(weatherAsync(city))
  }, [dispatch, city])


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