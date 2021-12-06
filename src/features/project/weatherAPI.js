import axios from 'axios'

export function fetchWeather(coordinatesWeather){
    let key= 'f64ac6cd118643669da161604210211'
    return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${coordinatesWeather.lat},${coordinatesWeather.lng}&days=3&aqi=no&alerts=no`) 
}

export function searchWeather(city){
    return axios.get(`http://api.weatherapi.com/v1/current.json?key=f64ac6cd118643669da161604210211&q=${city}&aqi=no`)
}
//http://api.weatherapi.com/v1/current.json?key=f64ac6cd118643669da161604210211&q=Brest&aqi=no