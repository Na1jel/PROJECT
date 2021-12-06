import React, { useEffect, useState,  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectWeather, weatherAsync} from './weatherSlice'
import Modal from "./Modal"
import "./style/styleWeather.css"


export function Weather({coordinatesWeather, onClick}) {
  const weather = useSelector(selectWeather)
  const dispatch = useDispatch();

  const [modalActive, setModalActive] = useState (true)
  console.log(onClick)
  useEffect(() => {
    dispatch(weatherAsync(coordinatesWeather))
  }, [dispatch,coordinatesWeather])

  function open(){
    setModalActive(true)
  }
  function close(){
    setModalActive(false)
  }

if(Object.keys(weather).length && onClick){
    return (
        <Modal open={open} close={close}/>
    )}else{
      return(
        <div className="loader"> 
        <h1>кликните на карту, чтобы узнать погоду</h1>
        
        </div>
      )
    }
}