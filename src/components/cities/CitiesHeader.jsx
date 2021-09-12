import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import uuidv4 from '../../utils/uuid';
import { cityActions } from '../../redux/cities';

export const CitiesHeader = ({ title }) => {
	const dispatch = useDispatch();

	const handleAddCityClick = () => {
		dispatch(cityActions.addCity({ id: uuidv4(), name: Date.now() }));
	};

	return (
		<div className="cities__main-title">
			<h2 className="cities__main-title__text">{title}</h2>
			<button
				className="cities__main-title__add"
				onClick={handleAddCityClick}
				type="button"
			>
				Add City
			</button>
		</div>
	);
};

CitiesHeader.propTypes = {
	title: PropTypes.string,
};
