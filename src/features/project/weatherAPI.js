import axios from 'axios'

export function fetchWeather(data){
    let key= '1df21f1270514720982153616212210'
    let q='Brest'
    if(data.key){
        key = data.key
    }
    if(data.q){
        q = data.q
    }
    return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${q}&days=4&aqi=no&alerts=no`) 
   
}

// https://api.weatherapi.com/v1/forecast.json?key=1df21f1270514720982153616212210&q=$Brest&days=4&aqi=no&alerts=no
