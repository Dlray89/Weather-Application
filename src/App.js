import React from 'react';
import './App.css';
import WeatherList from "./components/weatherList";

function App() {
  return (
    <div className="App">
    <h1>5 day forecast</h1>
    <div><WeatherList /></div>
    </div>
  );
}

export default App;
