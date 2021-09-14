import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ title }) => {
	return (
		<header className="header">
			<img className="header__logo" src="/assets/tamanna.png" alt="Tamanna" />
			<nav className="header__navigation">
				<h1>{title}</h1>
			</nav>
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string,
};
