import React from 'react';
import { City } from './City';
import { CitiesHeader } from './CitiesHeader';

export const CurrentLocation = () => {
	return (
		<section className="cities">
			<CitiesHeader title="Current Location" hideAddButton={true} />
			<City city={{ name: 'Lisbon', id: 0 }} isRemovable={false} />
		</section>
	);
};
