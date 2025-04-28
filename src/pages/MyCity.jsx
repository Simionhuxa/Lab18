import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyCity() {
  const [weather, setWeather] = useState(null);
  const city = 'Varva, Chernihiv, Ukraine'; 
  const API_KEY = '0bbce69c5415418fb4f80256252804'; 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
          params: {
            key: API_KEY,
            q: city,
            lang: 'uk', 
          },
        });
        setWeather(response.data);
      } catch (error) {
        console.error('Помилка отримання погоди:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <h1>Моє місто — смт Варва</h1>
      <p>Варва — селище міського типу в Чернігівській області України. Bсі розуміють де знаходиться Вавра, якщо сказати що рядом Прилуки.</p>

      {weather ? (
        <div>
          <p>Температура: {weather.current.temp_c}°C</p>
          <p>Опис: {weather.current.condition.text}</p>
          <p>Координати: {weather.location.lat}, {weather.location.lon}</p>
          <p>Країна: {weather.location.country}</p>
        </div>
      ) : (
        <p>Завантаження даних про погоду...</p>
      )}
    </div>
  );
}

export default MyCity;
