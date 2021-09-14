import React from 'react';
import { screen, render } from '@testing-library/react';
import { WeatherHeader } from '../components/weather/WeatherHeader';

describe('tests WeatherHeader', () => {
	test('does not render anything', () => {
		const { container } = render(<WeatherHeader />);

		expect(container.childElementCount).toBe(0);
	});

	test('renders with given title', () => {
		const title = 'I am a title';
		render(<WeatherHeader title={title} />);

		expect(screen.getByRole('heading')).toHaveTextContent(title);
	});

	test('renders with a given weather, with the correct image', () => {
		const weatherMock = [{ id: 1, main: 'Clouds', icon: 'icon' }];

		render(<WeatherHeader weather={weatherMock} />);

		expect(screen.getByAltText(weatherMock[0].main)).toHaveAttribute(
			'src',
			`https://openweathermap.org/img/w/${weatherMock[0].icon}.png`
		);
	});
});
