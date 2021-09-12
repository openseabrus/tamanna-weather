import React, { useEffect, useState } from 'react';
import { City } from './City';
import { CitiesHeader } from './CitiesHeader';
import { useDispatch, useSelector } from 'react-redux';
import { weatherActions, weatherSelectors } from '../../redux/weather';

export const CurrentLocation = () => {
	const dispatch = useDispatch();

	const weatherData = useSelector(weatherSelectors.getWeather) || {};
	const [currentLocation, setCurrentLocation] = useState({});

	const currentLocationWeather =
		weatherData[`${currentLocation.latitude}|${currentLocation.longitude}`];

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				const { latitude, longitude } = coords;
				setCurrentLocation({ latitude, longitude });
				dispatch(
					weatherActions.fetchWeatherByCoordinatesBegin(latitude, longitude)
				);
			},
			(error) => {
				console.error('Error Code = ' + error.code + ' - ' + error.message);
				setCurrentLocation({ latitude: 38.7259284, longitude: -9.137382 });
			}
		);
	}, []);

	return (
		<section className="cities">
			<CitiesHeader title="Current Location" hideAddButton={true} />
			<City
				city={{ id: 0 }}
				weather={currentLocationWeather}
				isRemovable={false}
			/>
			<button
				onClick={() =>
					dispatch(
						weatherActions.fetchWeatherByCoordinatesBegin(38.7259284, -9.137382)
					)
				}
			>
				Click me
			</button>
		</section>
	);
};
