import React from 'react';
import PropTypes from 'prop-types';

export const Weather = ({ current, forecast }) => {
	const renderCurrentWeather = () => {
		if (current) {
			const { temp, feels_like, humidity, uvi, wind_speed } = current;
			return (
				<div>
					<h4 className="cities__weather__title">Current Weather</h4>
					<p>Temperature: {temp} C</p>
					<p>Feels Like: {feels_like} C</p>
					<p>Humidity: {humidity} %</p>
					<p>UV Index: {uvi}</p>
					<p>Wind Speed: {wind_speed} km/h</p>
				</div>
			);
		}
		return null;
	};

	const renderWeatherForecast = () => {
		if (forecast) {
			const { temp, feels_like, humidity, uvi, wind_speed, dt } = forecast;
			const { min, max } = temp;
			const { day } = feels_like;

			const forecastDate = new Date(dt * 1000);
			return (
				<>
					<h4 className="cities__weather__title">{forecastDate.toDateString()}</h4>
					<p>Min Temperature: {min} C</p>
					<p>Max Temperature: {max} C</p>
					<p>Feels Like: {day} C</p>
					<p>Humidity: {humidity} %</p>
					<p>UV Index: {uvi}</p>
					<p>Wind Speed: {wind_speed} km/h</p>
				</>
			);
		}
		return null;
	};

	return (
		<article className="cities__weather">
			{renderCurrentWeather()}
			{renderWeatherForecast()}
		</article>
	);
};

Weather.propTypes = {
	current: PropTypes.object,
	forecast: PropTypes.object,
};
