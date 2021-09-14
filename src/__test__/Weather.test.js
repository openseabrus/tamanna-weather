import React from 'react';
import { screen, render } from '@testing-library/react';
import { Weather } from '../components/weather/Weather';
import { withMarkup } from './withMarkup';

describe('tests Weather', () => {
	const mockWeather = {
		dt: 1631466578,
		sunrise: 1631427331,
		sunset: 1631472623,
		temp: 23.52,
		feels_like: 23.62,
		pressure: 1010,
		humidity: 65,
		dew_point: 16.56,
		uvi: 0.86,
		clouds: 0,
		visibility: 10000,
		wind_speed: 5.14,
		wind_deg: 250,
		weather: [
			{
				id: 800,
				main: 'Clear',
				description: 'clear sky',
				icon: '01d',
			},
		],
	};

	test('renders an empty article', () => {
		render(<Weather />);

		expect(screen.getByRole('article')).toBeEmptyDOMElement();
	});

	test('renders with given weather conditions', () => {
		render(<Weather current={mockWeather} />);

		screen.getByText('Current Weather');
		screen.getByText(withMarkup('Temperature 23.52 C'));
		screen.getByText(withMarkup('Feels Like 23.62 C'));
		screen.getByText(withMarkup('Humidity 65 %'));
		screen.getByText(withMarkup('UV Index 0.86'));
		screen.getByText(withMarkup('Wind Speed 5.14 km/h'));
	});

	test('renders with given forecast, dynamic date title', () => {
		render(<Weather forecast={mockWeather} />);

		screen.getByText(new Date(mockWeather.dt * 1000).toDateString());
	});
});
