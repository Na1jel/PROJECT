import axios from 'axios'

export function fetchWeather(data){
    let key= 'f64ac6cd118643669da161604210211 '
    let lat = 18.4
    let lon = 76.58
    let city = 'Brest'
    if(data.key){
        key = data.key
    }
    
    return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}$lat=${lat}&lon=${lon}&days=4&aqi=no&alerts=no`) 
   
}

// https://api.weatherapi.com/v1/forecast.json?key=f64ac6cd118643669da161604210211&q=$Brest&days=4&aqi=no&alerts=no
// https://api.weatherapi.com/v1/forecast.json?key=f64ac6cd118643669da161604210211&q=$lat=18.4&lon=76.58&days=4&aqi=no&alerts=no