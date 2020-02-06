import React from "react";


function WeatherCard (props) {
    return(
        <div>
            <h1> Country/State: {props.timezone}</h1>
            <p>Latitude/Longitude: {props.latitude}, {props.longitude}</p>
            
            <p>Storm Summary: {props.icon}, {props.summary}</p>
            <p>Humidity: {props.humidity}</p>

        </div>
    )
}

export default WeatherCard;