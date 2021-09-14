import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../components/elements';

describe('tests Button', () => {
	test('does not render anything', () => {
		const { container } = render(<Button />);

		expect(container.childElementCount).toBe(0);
	});

	test('renders with given text', () => {
		render(<Button>Apply</Button>);

		expect(screen.getByRole('button')).toBeEnabled();
	});

	test('renders with given text, disabled', () => {
		render(<Button disabled={true}>Submit</Button>);

		expect(screen.getByRole('button')).toBeDisabled();
	});

	test('calls onClick when clicked', () => {
		const mockOnClick = jest.fn();
		render(<Button onClick={mockOnClick}>Done</Button>);

		const doneButton = screen.getByRole('button');
		userEvent.click(doneButton);

		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});
});
