import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectWeather} from './weatherSlice'

export function Weather(){
    const weathers = useSelector(selectWeather)
    console.log(weathers)
    const dispatch = useDispatch();
    return(
        <div>
            {
                // weathers.weather.map(w=>{
                //     <p>{w.main.temp}</p>
                // })
            }
        </div>
    )
}