import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchWeather, searchWeather} from './weatherAPI';


const initialState  = {
    value: {},
    status: 'idle',
    position:{},
}

export const weatherAsync = createAsyncThunk(
    'weather/fetchWeather',
    async(coordinatesWeather)=>{
        const response = await fetchWeather(coordinatesWeather);
        return response.data
    }
)

export const searchWeatherAsync = createAsyncThunk(
    'weather/searchWeather',
    async(city)=>{
        const response = await searchWeather(city);
        return response.date
    }
) 
export const weatherSlice = createSlice({
    name: 'weather',
    initialState ,
    reducers:{
        setPosition: (state, position)=>{
            state.position = position
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(weatherAsync.pending, (state)=>{
                state.status = 'loading'
            })
            .addCase(weatherAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
            })
            .addCase(searchWeatherAsync.pending, (state)=>{
                state.status = 'loading'
            })
            .addCase(searchWeatherAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
            })
    }
})

export const selectPosition = (state) => state.weather.position;
export const selectWeather = (state) => state.weather.value;
export const searchSelectWeather = (state) => state.weather.value


export default weatherSlice.reducer;