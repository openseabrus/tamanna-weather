import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
	onClick = () => {},
	type,
	className = '',
	children,
}) => {
	return (
		<button className={`button ${className}`} onClick={onClick} type={type}>
			{children}
		</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func,
	type: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.string,
};
