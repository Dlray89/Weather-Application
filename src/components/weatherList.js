import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

function WeatherList(props) {
  const [weatherLocation, setweatherLocation] = useState([]);
  const [weatherSummary, setweatherSummary] = useState([])
  const [weatherMinutely, setweatherMintely] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/69e451513cd8dee24b296e8b12737274/33.953561,-84.542463"
      )
      .then(res => {
        console.log("this is the list", res.data.minutely)

        const location = res.data;
        setweatherLocation(location)

        const summary= res.data.currently;
        setweatherSummary(summary)
        
        const minute = res.data.minutely;
        setweatherMintely(minute);

      })
      .catch(error => {
        console.log("an error had happened", error);
      });
  }, []);

  return (
    <div>
      <WeatherCard timezone={weatherLocation.timezone} latitude={weatherLocation.latitude} 
      longitude={weatherLocation.longitude} summary={weatherSummary.summary} icon={weatherSummary.icon}
      humidity={weatherSummary.humidity} summaryM={weatherMinutely.summary} />
    </div>
  );
}

export default WeatherList;
 