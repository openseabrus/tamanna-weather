import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { citySelectors } from '../../../redux/cities';
import { cityActions } from '../../../redux/cities';
import uuidv4 from '../../../utils/uuid';

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
	const { isAddCityOpen } = useSelector(citySelectors.getCities);

	const [cityName, setCityName] = useState('');

	const onCityNameChange = (e) => {
		setCityName(e.target.value);
	};

	const handleCloseModal = () => {
		dispatch(cityActions.addCityClose());
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (cityName) {
			dispatch(cityActions.saveCity({ name: cityName, id: uuidv4() }));
			setCityName('');
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
					<button>Submit</button>
				</form>
			</Modal>
		</>
	);
};
