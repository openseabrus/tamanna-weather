import React from 'react';
import { useSelector } from 'react-redux';
import { City } from './City';
import { CitiesHeader } from './CitiesHeader';
import { CurrentLocation } from './CurrentLocation';
import { citySelectors } from '../../redux/cities';

export const Cities = () => {
	const { cityList = [] } = useSelector(citySelectors.getCities);

	return (
		<>
			<CurrentLocation />
			<section className="cities">
				<CitiesHeader title="Saved Cities" />
				{cityList.map((city) => (
					<City city={city} key={city.name} />
				))}
			</section>
		</>
	);
};
