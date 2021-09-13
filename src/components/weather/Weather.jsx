import React from 'react';
import PropTypes from 'prop-types';

export const Weather = ({ current, forecast }) => {
	const renderCurrentWeather = () => {
		if (current) {
			const { temp, feels_like, humidity, uvi, wind_speed } = current;
			return (
				<div>
					<h4 className="cities__weather__title">Current Weather</h4>
					<p>
						<strong>Temperature</strong> {temp} C
					</p>
					<p>
						<strong>Feels Like</strong> {feels_like} C
					</p>
					<p>
						<strong>Humidity</strong> {humidity} %
					</p>
					<p>
						<strong>UV Index</strong> {uvi}
					</p>
					<p>
						<strong>Wind Speed</strong> {wind_speed} km/h
					</p>
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
					<p>
						<strong>Min Temperature</strong> {min} C
					</p>
					<p>
						<strong>Max Temperature</strong> {max} C
					</p>
					<p>
						<strong>Feels Like</strong> {day} C
					</p>
					<p>
						<strong>Humidity</strong> {humidity} %
					</p>
					<p>
						<strong>UV Index</strong> {uvi}
					</p>
					<p>
						<strong>Wind Speed</strong> {wind_speed} km/h
					</p>
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
