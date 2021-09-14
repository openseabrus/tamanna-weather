import React from 'react';
import {
	screen,
	render,
	waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { City } from '../components/cities';

describe('tests City', () => {
	const mockStore = configureStore();
	const initialState = {
		weather: { loading: false },
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
	const mockWeather = {
		'37.7021|-121.9358': {
			loading: false,
			error: null,
			lat: 37.7021,
			lon: -121.9358,
			timezone: 'Europe/Lisbon',
			timezone_offset: 3600,
			current: {
				dt: 1631638736,
				sunrise: 1631600235,
				sunset: 1631645229,
				temp: 23.64,
				feels_like: 23.89,
				pressure: 1008,
				humidity: 70,
				dew_point: 17.85,
				uvi: 0.47,
				clouds: 40,
				visibility: 10000,
				wind_speed: 4.63,
				wind_deg: 230,
				weather: [
					{
						id: 802,
						main: 'Clouds',
						description: 'scattered clouds',
						icon: '03d',
					},
				],
			},
			daily: [
				{
					dt: 1631620800,
					sunrise: 1631600235,
					sunset: 1631645229,
					moonrise: 1631630460,
					moonset: 1631574240,
					moon_phase: 0.27,
					temp: {
						day: 23.21,
						min: 19.81,
						max: 23.87,
						night: 21.11,
						eve: 23.54,
						morn: 20.12,
					},
					feels_like: {
						day: 23.28,
						night: 21.13,
						eve: 23.7,
						morn: 20.38,
					},
					pressure: 1008,
					humidity: 65,
					dew_point: 16.1,
					wind_speed: 4.87,
					wind_deg: 177,
					wind_gust: 7.81,
					weather: [
						{
							id: 501,
							main: 'Rain',
							description: 'moderate rain',
							icon: '10d',
						},
					],
					clouds: 100,
					pop: 1,
					rain: 6.36,
					uvi: 5.17,
				},
				{
					dt: 1631707200,
					sunrise: 1631686687,
					sunset: 1631731532,
					moonrise: 1631720520,
					moonset: 1631663940,
					moon_phase: 0.31,
					temp: {
						day: 22.87,
						min: 18.5,
						max: 23.96,
						night: 20.26,
						eve: 22.69,
						morn: 18.5,
					},
					feels_like: {
						day: 22.88,
						night: 20.51,
						eve: 22.79,
						morn: 18.55,
					},
					pressure: 1015,
					humidity: 64,
					dew_point: 15.51,
					wind_speed: 5.2,
					wind_deg: 337,
					wind_gust: 6.87,
					weather: [
						{
							id: 500,
							main: 'Rain',
							description: 'light rain',
							icon: '10d',
						},
					],
					clouds: 46,
					pop: 0.5,
					rain: 1.41,
					uvi: 6.4,
				},
			],
		},
	};
	let store;

	test('does not render anything', () => {
		<Provider store={store}>
			<City />
		</Provider>;

		expect(screen.queryByText('Delete City')).not.toBeInTheDocument();
	});

	test('renders a City', () => {
		store = mockStore({ ...initialState, weather: mockWeather });

		const { getByText, getAllByText } = render(
			<Provider store={store}>
				<City city={mockCity} />
			</Provider>
		);

		getByText('Delete City');
		expect(getAllByText('Feels Like')).toHaveLength(
			mockWeather['37.7021|-121.9358'].daily.length + 1
		);
	});

	test('renders a non-removable city', () => {
		store = mockStore({ ...initialState, weather: mockWeather });

		render(
			<Provider store={store}>
				<City city={mockCity} isRemovable={false} />
			</Provider>
		);

		expect(screen.queryByRole('button')).not.toBeInTheDocument();
	});
});
