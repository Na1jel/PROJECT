import React, { useEffect, useState,  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectWeather, weatherAsync} from './weatherSlice'
import "./style/styleWeather.css"


export function Weather({coordinatesWeather}) {
  const weather = useSelector(selectWeather)
  const dispatch = useDispatch();
  const [city, setCity] = useState('')
  console.log('coord',coordinatesWeather)
 
  useEffect(() => {
    dispatch(weatherAsync(coordinatesWeather))
  }, [dispatch,coordinatesWeather])

  
  function onSubmit(e){
    e.preventDefault();
  
  }

if(Object.keys(weather).length){
    return (
    <div className='weather'>
     <div className='search'>
      </div>
      <div className='info'>
        City:{weather.location.name}
        <h3>Weacher day</h3>
        <ul>
        {weather.forecast.forecastday.map(d =>
              <li key={d.date}> Date: {d.date} <br/> ОТ {d.day.mintemp_c} - До {d.day.maxtemp_c} <br/> <img src={d.day.condition.icon}></img></li>
            )}
        </ul>
        
      </div>
    </div>
    )}else{
      return(
        <div className="loader"> 
        <h1>кликните на карту, чтобы узнать погоду</h1>
        
        </div>
      )
    }
}