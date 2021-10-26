import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchWeather} from './weatherAPI';

const initialState  = {
    weather: {},
    status: 'idle',
}

export const weatherAsync = createAsyncThunk(
    'weathers/fetchWeather',
    async(data)=>{
        const response = await fetchWeather(data);
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
                state.weather = action.payload;
            })
    }
})

export const selectWeather = (state) => state.weather.weather;


export default weatherSlice.reducer;