import React from 'react';
import PropTypes from 'prop-types';
import { Weather } from '../weather/Weather';
import { useDispatch } from 'react-redux';
import { cityActions } from '../../redux/cities';

export const City = ({ city, weather, isRemovable = true }) => {
	const { name, id } = city;
	const dispatch = useDispatch();

	const deleteCityHandler = () => {
		dispatch(cityActions.removeCity(id));
	};

	const { current, daily = [] } = weather || {};

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
				<Weather current={current} />
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
