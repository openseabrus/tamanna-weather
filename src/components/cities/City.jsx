import React from 'react';
import PropTypes from 'prop-types';
import { Weather } from '../weather/Weather';
import { useDispatch } from 'react-redux';
import { cityActions } from '../../redux/cities';

export const City = ({ city }) => {
	const { name, id } = city;
	const dispatch = useDispatch();

	const deleteCityHandler = () => {
		dispatch(cityActions.removeCity(id));
	};

	return (
		<>
			<div className="cities__title">
				<h3>Weather in {name}</h3>
				<button onClick={deleteCityHandler} type="button">
					Delete City
				</button>
			</div>
			<article className="cities__card">
				<Weather />
				<Weather />
				<Weather />
				<Weather />
				<Weather />
				<Weather />
				<Weather />
			</article>
		</>
	);
};

City.propTypes = {
	city: PropTypes.object,
};
