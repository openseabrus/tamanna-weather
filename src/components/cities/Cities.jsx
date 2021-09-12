import React from 'react';
import { useSelector } from 'react-redux';
import { City } from './City';
import { CitiesHeader } from './CitiesHeader';
import { citySelectors } from '../../redux/cities';

export const Cities = () => {
	const cities = useSelector(citySelectors.getCities);
	console.info(cities);

	return (
		<section className="cities">
			<CitiesHeader title="Saved Cities" />
			<City cityName="Valencia" />
			<City cityName="Rome" />
		</section>
	);
};
