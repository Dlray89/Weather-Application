import React from "react";

function WeatherCard(props) {
  return (
    <div>
      <form>
        <label htmlFor="weather">Search Your City</label>
        <br />
        <input name="weather" type="search" placeholder="Search" />
        <button>Search</button>
      </form>
      <h1> Country/State: {props.timezone}</h1>
      <p>
        Latitude/Longitude: {props.latitude}, {props.longitude}
      </p>

      <p>
        Storm Summary: {props.icon}, {props.summary}
      </p>
      <p>Humidity: {props.humidity}</p>
      <div>{props.summaryM}</div>
    </div>
  );
}

export default WeatherCard;
