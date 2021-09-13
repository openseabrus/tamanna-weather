import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cityActions } from '../../redux/cities';
import { Button } from '../elements';

export const CitiesHeader = ({ title, hideAddButton = false }) => {
	const dispatch = useDispatch();

	const handleAddCityClick = () => {
		dispatch(cityActions.addCity());
	};

	return (
		<div className="cities__main-title">
			<h2 className="cities__main-title__text">{title}</h2>
			{!hideAddButton && (
				<Button
					className="cities__main-title__add"
					onClick={handleAddCityClick}
					type="button"
				>
					Add City
				</Button>
			)}
		</div>
	);
};

CitiesHeader.propTypes = {
	title: PropTypes.string,
	hideAddButton: PropTypes.bool,
};
