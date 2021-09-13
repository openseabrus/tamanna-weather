import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Weather } from '../weather/Weather';
import { useDispatch, useSelector } from 'react-redux';
import { cityActions } from '../../redux/cities';
import { weatherActions, weatherSelectors } from '../../redux/weather';

export const City = ({ city, weather, isRemovable = true }) => {
	const { name, id, lat, lon } = city;
	const dispatch = useDispatch();

	const citiesWeather = useSelector(weatherSelectors.getWeather);

	useEffect(() => {
		if (lat && lon && (!citiesWeather || !citiesWeather[`${lat}|${lon}`])) {
			dispatch(weatherActions.fetchWeatherByCoordinatesBegin(lat, lon));
		}
	}, [lat, lon, citiesWeather]);

	const deleteCityHandler = () => {
		dispatch(cityActions.removeCity(id));
	};

	const { current, daily = [] } =
		weather || citiesWeather[`${lat}|${lon}`] || {};

	return (
		<>
			<div className="cities__title">
				{name && <h3>Weather in {name}</h3>}
				{isRemovable && (
					<button onClick={deleteCityHandler} type="button">
						Delete City
					</button>
				)}
			</div>
			<article className="cities__card">
				<div className="cities__current-weather">
					<Weather current={current} />
				</div>
				{daily.map((dailyForecast) => (
					<Weather forecast={dailyForecast} key={dailyForecast.dt} />
				))}
			</article>
		</>
	);
};

City.propTypes = {
	city: PropTypes.object,
	weather: PropTypes.object,
	isRemovable: PropTypes.bool,
};
