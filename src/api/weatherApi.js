import axios from 'axios';

const API_KEY = 'your_api_key_here';
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

export const fetchWeather = async (city) => {
  const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${city}&lang=uk`);
  return response.data;
};
