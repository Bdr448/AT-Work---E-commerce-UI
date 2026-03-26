import React from 'react';

const API_KEY = 'YOUR_OPENWEATHER_API_KEY';

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: '', weather: null, err: '' };
  }

  search() {
    const { city } = this.state;
    if (!city) return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((res) => {
        if (!res.ok) throw new Error('City not found');
        return res.json();
      })
      .then((data) => this.setState({ weather: data, err: '' }))
      .catch((e) => this.setState({ err: e.message, weather: null }));
  }

  render() {
    const { city, weather, err } = this.state;
    return (
      <>
        <h3>Weather App</h3>
        <input type='text' value={city} placeholder='Enter city name'
          onChange={(e) => this.setState({ city: e.target.value })}
          style={{ padding: '6px', width: '220px', marginRight: '8px' }} />
        <button onClick={this.search.bind(this)} style={{ padding: '6px 14px' }}>Search</button>
        {err && <p style={{ color: 'red' }}>{err}</p>}
        {weather && (
          <div style={{ marginTop: '16px', border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '300px' }}>
            <h4>{weather.name}, {weather.sys.country}</h4>
            <p>🌡 Temp: {weather.main.temp}°C</p>
            <p>💧 Humidity: {weather.main.humidity}%</p>
            <p>🌤 {weather.weather[0].description}</p>
            <p>💨 Wind: {weather.wind.speed} m/s</p>
          </div>
        )}
        <p style={{ color: 'gray', fontSize: '12px', marginTop: '10px' }}>
          * Replace YOUR_OPENWEATHER_API_KEY with your API key from openweathermap.org
        </p>
      </>
    );
  }
}

export default WeatherApp;
