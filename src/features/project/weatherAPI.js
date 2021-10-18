import axios from 'axios'

export function fetchWeather(data){
    let appid= '10785b7930ad9b19367b1419c07f8dd3'
    let q='Brest'
    return axios.get(`pro.openweathermap.org/data/2.5/forecast/hourly?q=${q}&appid=${appid}`) 
    
}
