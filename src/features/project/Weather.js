import React, { useEffect, useState,  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectWeather, weatherAsync } from './weatherSlice'
import './style/styleWeather.css'

export function Weather() {
  const weather = useSelector(selectWeather)
  const dispatch = useDispatch();
  const coordinatesWeather = useState({lat: 0, lon:0})
  const [nameWeather, setNameWeather] = useState('')
 
 
  useEffect(() => {
    dispatch(weatherAsync({ lat: 18.4, lon: 76.58 }))
  }, [dispatch])

  function search(e){
    setNameWeather(e.target.value)
    console.log('qwe:',nameWeather)
  }

  function onSubmit(e){
    e.preventDefault();
  
  }
if(Object.keys(weather).length){
    return (
     <div className='weather'>
       <form onSubmit={onSubmit}>
      <input type='text' value={nameWeather} onChange={search} />
      </form>
      {weather.location.name}
     </div>

    )}else{
      return(
  
        <div>Error</div>
      )
    }
}