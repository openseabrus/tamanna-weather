import React from 'react';
import { screen, render } from '@testing-library/react';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Cities } from '../components/cities';

describe('tests Cities', () => {
	const mockStore = configureStore();
	const initialState = {
		weather: {
			'37.7021|-121.9358': {
				loading: false,
				error: null,
				lat: 37.7021,
				lon: -121.9358,
				timezone: 'Europe/Lisbon',
				timezone_offset: 3600,
				current: {},
				daily: [],
			},
		},
		cities: {
			cityList: [],
		},
	};
	const mockCity = {
		name: 'Dublin',
		local_names: {
			en: 'Dublin',
		},
		lat: 37.7021,
		lon: -121.9358,
		country: 'US',
		state: 'CA',
		id: '79cfc3f8-59ab-4b51-b86c-413e3592b066',
	};
	let store;

	test('renders no saved cities', () => {
		store = mockStore(initialState);

		render(
			<Provider store={store}>
				<Cities />
			</Provider>
		);

		expect(screen.getByText('No Saved Cities Yet')).toBeInTheDocument();
	});

	test('renders a saved City', () => {
		store = mockStore({ ...initialState, cities: { cityList: [mockCity] } });

		const { getByText, queryByText } = render(
			<Provider store={store}>
				<Cities />
			</Provider>
		);

		expect(getByText('Saved Cities')).toBeInTheDocument();
		expect(queryByText('No Saved Cities Yet')).not.toBeInTheDocument();
	});
});
