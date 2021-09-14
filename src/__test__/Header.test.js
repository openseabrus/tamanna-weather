import React from 'react';
import { screen, render } from '@testing-library/react';
import { Header } from '../components/header';

describe('tests Header', () => {
	test('does not render anything', () => {
		render(<Header />);

		expect(screen.getByRole('heading')).toBeEmptyDOMElement();
	});

	test('renders with given title', () => {
		const title = 'I am a title';
		render(<Header title={title} />);

		expect(screen.getByRole('heading')).toHaveTextContent(title);
	});
});
