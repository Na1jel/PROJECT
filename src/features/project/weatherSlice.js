import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchWeather} from './weatherAPI';


const initialState  = {
    value: {},
    status: 'idle',
}

export const weatherAsync = createAsyncThunk(
    'weather/fetchWeather',
    async(coordinatesWeather)=>{
        const response = await fetchWeather(coordinatesWeather);
        return response.data
    }
)

export const weatherSlice = createSlice({
    name: 'weather',
    initialState ,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(weatherAsync.pending, (state)=>{
                state.status = 'loading'
            })
            .addCase(weatherAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
            })
    }
})

export const selectWeather = (state) => state.weather.value;



export default weatherSlice.reducer;