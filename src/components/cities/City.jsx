import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Weather } from '../weather/Weather';
import { useDispatch, useSelector } from 'react-redux';
import { cityActions } from '../../redux/cities';
import { weatherActions, weatherSelectors } from '../../redux/weather';
import { getCountryNameByCode } from '../../utils/countries';
import { Button } from '../elements';

export const City = ({ city, weather, isRemovable = true }) => {
	const { name, country, id, lat, lon } = city;
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

	// Fetch conditions from a given object, or from OWM
	const { current, daily = [] } =
		weather || citiesWeather[`${lat}|${lon}`] || {};

	return (
		<>
			<div className="cities__title">
				{name && (
					<h3>
						Weather in {name}, {getCountryNameByCode(country)}
					</h3>
				)}
				{isRemovable && (
					<Button
						className="button--danger"
						onClick={deleteCityHandler}
						type="button"
					>
						Delete City
					</Button>
				)}
			</div>
			<article className="cities__card">
				{current && (
					<div className="cities__current-weather">
						<Weather current={current} />
					</div>
				)}
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
