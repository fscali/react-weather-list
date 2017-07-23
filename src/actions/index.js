import axios from 'axios';

const API_KEY = '6ca943d9154a7369cd330732c97ba26e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; 

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},it`;
    const request = axios.get(url);

    console.log('Request: ', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}