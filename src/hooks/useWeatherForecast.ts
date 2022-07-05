import { useState } from 'react';
import axios from 'axios';

interface WeatherData {
  [key: string]: any;
}

const useWeatherForecast = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_API_KEY}`)
      .then((data) => {
        setWeatherData(data.data);
        setLocation('');
        setLoading(false);
      });
  };

  return { weatherData, location, setLocation, handleSearch, loading };
};

export default useWeatherForecast;
