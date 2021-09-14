import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ title }) => {
	return (
		<nav className="header">
			<a href="#">
				<img
					className="header__logo"
					src="/assets/tamanna.png"
					alt="Tamanna"
					title="Tamanna"
				/>
			</a>
			<h1 className="header__title">{title}</h1>
			<div className="header__icons">
				<a href="https://github.com/openseabrus" target="_blank" rel="noreferrer">
					<img
						className="header__icon"
						src="/assets/github.png"
						alt="Github"
						title="Github"
					/>
				</a>
				<a href="https://linkedin.com/in/seabrus" target="_blank" rel="noreferrer">
					<img
						className="header__icon"
						src="/assets/linkedin.png"
						alt="Linkedin"
						title="Linkedin"
					/>
				</a>
				<a href="/assets/_CV__seabrus.pdf" target="_blank" rel="noreferrer">
					<img className="header__icon" src="/assets/cv.png" alt="CV" title="CV" />
				</a>
			</div>
		</nav>
	);
};

Header.propTypes = {
	title: PropTypes.string,
};
