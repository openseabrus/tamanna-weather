import React from 'react';
import PropTypes from 'prop-types';
import { Weather } from '../weather/Weather';

export const City = ({ cityName }) => {
	return (
		<>
			<h3 className="cities__title">Weather in {cityName}</h3>
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
	cityName: PropTypes.string,
};
