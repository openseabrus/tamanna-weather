import React from 'react';
import PropTypes from 'prop-types';
import { WeatherHeader } from './WeatherHeader';

export const Weather = ({ current, forecast }) => {
	const renderCurrentWeather = () => {
		if (current) {
			const { temp, feels_like, humidity, uvi, wind_speed, weather } = current;
			return (
				<div>
					<WeatherHeader title="Current Weather" weather={weather} />
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
			const { temp, feels_like, humidity, uvi, wind_speed, dt, weather } =
				forecast;
			const { min, max } = temp;
			const { day } = feels_like;

			const forecastDate = new Date(dt * 1000);
			return (
				<>
					<WeatherHeader title={forecastDate.toDateString()} weather={weather} />
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
