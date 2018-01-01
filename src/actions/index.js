import axios from 'axios';

const API_KEY = '3e17479aeca8654f61655f0430d0dfac';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; 

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},us&units=metric`;
  const request = axios.get(url);

  // request will be resolved by middleware redux promise and redux will dispatch
  // another action with same type and resolved data as the action payload
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

