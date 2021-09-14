import React, { useEffect, useState } from 'react';
import { City } from './City';
import { CitiesHeader } from './CitiesHeader';
import { useDispatch, useSelector } from 'react-redux';
import { weatherActions, weatherSelectors } from '../../redux/weather';
import Loader from '../loader';

export const CurrentLocation = () => {
	const dispatch = useDispatch();

	const weatherData = useSelector(weatherSelectors.getWeather) || {};
	const [currentLocation, setCurrentLocation] = useState({});
	const [isWaitingForLocation, setIsWaitingForLocation] = useState(true);

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
				setIsWaitingForLocation(false);
			},
			() => {
				setCurrentLocation({
					latitude: 38.7259284,
					longitude: -9.137382,
					name: 'Lisbon (Current Location N/A)',
				});
				dispatch(
					weatherActions.fetchWeatherByCoordinatesBegin(38.7259284, -9.137382)
				);
				setIsWaitingForLocation(false);
			}
		);
	}, []);

	return (
		<section className="cities">
			<CitiesHeader
				title={currentLocation.name || 'Current Location'}
				hideAddButton={true}
			/>
			{isWaitingForLocation ? (
				<Loader />
			) : (
				<City
					city={{ id: 0 }}
					weather={currentLocationWeather}
					isRemovable={false}
				/>
			)}
		</section>
	);
};
