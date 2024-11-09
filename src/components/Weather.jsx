import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

const Weather = () => {

  const inputRef = useRef()
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  }

  const search = async (city) => {
    if(city === "") {
      alert("Enter City Name");
      return;
    }
    try {
      // First, get coordinates from the geocoding API
      const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
      const geoResponse = await fetch(geocodingUrl);
      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        alert("City not found!");
        return;
      }

      const { latitude, longitude, name } = geoData.results[0];
      
      // Then, get weather data using the coordinates
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`;
      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();

      if (!weatherResponse.ok) {
        alert("Error fetching weather data");
        return;
      }

      // Update weather data state with the new format
      setWeatherData({
        humidity: weatherData.current.relative_humidity_2m,
        windSpeed: weatherData.current.wind_speed_10m,
        temperature: Math.floor(weatherData.current.temperature_2m),
        location: name,
        // Since Open-Meteo doesn't provide weather icons, we'll need to implement basic logic
        icon: determineWeatherIcon(weatherData.current.temperature_2m)
      });

    } catch (error) {
      setWeatherData(false);
      console.error("Error in fetching weather data:", error);
    }
  }

  // Simple function to determine weather icon based on temperature
  const determineWeatherIcon = (temp) => {
    if (temp > 30) return clear_icon;
    if (temp > 20) return cloud_icon;
    if (temp > 10) return drizzle_icon;
    if (temp > 0) return rain_icon;
    return snow_icon;
  }

  // Add this new function to handle key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      search(inputRef.current.value);
    }
  };

  useEffect(() => {
    console.log("Environment variables:", {
      VITE_APP_ID: import.meta.env.VITE_APP_ID,
      ALL_ENV: import.meta.env
    });
    
    search("Kolkata");
  }, []);
  return (
    <div className='weather'>
        <div className='search-bar'>
            <input 
              ref={inputRef} 
              type='text' 
              placeholder='Search'
              onKeyPress={handleKeyPress}  // Add this line
            />
            <img 
              src={search_icon} 
              alt='search' 
              onClick={() => search(inputRef.current.value)} 
            />
        </div>
        {weatherData?<>
          <img src={weatherData.icon} alt='' className='weather-icon'/>
        <p className='temperature'>{weatherData.temperature}&deg;C</p>
        <p className='location'>{weatherData.location}</p>
        <div className='weather-data'>
          <div className='col'>
            <img src={humidity_icon} alt="" />
            <div>
              <p>{weatherData.humidity} %</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className='col'>
            <img src={wind_icon} alt="" />
            <div>
              <p>{weatherData.windSpeed} km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
        </>:<></>}
        
    </div>
  )
}

export default Weather
