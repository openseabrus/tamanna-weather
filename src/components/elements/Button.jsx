import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
	onClick = () => {},
	type,
	className = '',
	disabled = false,
	children,
}) => {
	if (children) {
		return (
			<button
				className={`button ${className}`}
				disabled={disabled}
				onClick={onClick}
				type={type}
			>
				{children}
			</button>
		);
	}
	return null;
};

Button.propTypes = {
	onClick: PropTypes.func,
	type: PropTypes.string,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	children: PropTypes.string,
};
