import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { citySelectors } from '../../../redux/cities';
import { cityActions } from '../../../redux/cities';

export const NewCityForm = () => {
	const modalStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
		},
	};

	const dispatch = useDispatch();
	const { isAddCityOpen, error } = useSelector(citySelectors.getCities);

	const [cityName, setCityName] = useState('');

	useEffect(() => {
		if (!isAddCityOpen) {
			setCityName('');
		}
	}, [isAddCityOpen]);

	const onCityNameChange = (e) => {
		setCityName(e.target.value);
	};

	const handleCloseModal = () => {
		dispatch(cityActions.addCityClose());
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (cityName) {
			dispatch(cityActions.addCityBegin(cityName));
		}
	};

	return (
		<>
			<Modal
				isOpen={isAddCityOpen}
				onRequestClose={handleCloseModal}
				contentLabel="Add a new City"
				style={modalStyles}
				ariaHideApp={false}
			>
				<form className="new-city-form" onSubmit={handleFormSubmit}>
					<div className="new-city-form__input">
						<label htmlFor="city">City Name</label>
						<input
							id="username"
							type="text"
							name="city"
							value={cityName}
							onChange={onCityNameChange}
						/>
					</div>
					{error && (
						<p className="new-city-form__error">
							Could not find a city with the given data.
						</p>
					)}
					<button>Submit</button>
				</form>
			</Modal>
		</>
	);
};
