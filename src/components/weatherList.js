import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

function WeatherList(props) {
  const [weatherLocation, setweatherLocation] = useState([]);
  const [weatherSummary, setweatherSummary] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/69e451513cd8dee24b296e8b12737274/33.953561,-84.542463"
      )
      .then(res => {
        console.log("this is the list", res.data.currently)
        
        const location = res.data;
        setweatherLocation(location)

        const summary= res.data.currently;
        setweatherSummary(summary)

      })
      .catch(error => {
        console.log("an error had happened", error);
      });
  }, []);

  return (
    <div>
      <WeatherCard timezone={weatherLocation.timezone} latitude={weatherLocation.latitude} 
      longitude={weatherLocation.longitude} summary={weatherSummary.summary} icon={weatherSummary.icon}
      humidity={weatherSummary.humidity} />
    </div>
  );
}

export default WeatherList;
 