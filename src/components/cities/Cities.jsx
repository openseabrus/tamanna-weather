import React from 'react';
import { useSelector } from 'react-redux';
import { City } from './City';
import { CitiesHeader } from './CitiesHeader';
import { citySelectors } from '../../redux/cities';

export const Cities = () => {
	const { cityList = [] } = useSelector(citySelectors.getCities);

	return (
		<>
			<section className="cities">
				<CitiesHeader title="Saved Cities" />
				{cityList.map((city) => (
					<City city={city} key={city.name} />
				))}
			</section>
		</>
	);
};
