import React from 'react';
import PropTypes from 'prop-types';

export const WeatherHeader = ({ weather, title }) => {
	const [weatherDetails] = weather || [{}];
	const { main: weatherDescription, icon } = weatherDetails;

	if (!icon && !title) {
		return null;
	}

	return (
		<header className="cities__weather__title">
			{title && <h4 className="cities__weather__title__text">{title}</h4>}
			{icon && (
				<img
					src={`https://openweathermap.org/img/w/${icon}.png`}
					alt={weatherDescription}
					height={50}
					title={weatherDescription}
				/>
			)}
		</header>
	);
};

WeatherHeader.propTypes = {
	weather: PropTypes.array,
	title: PropTypes.string,
};
