import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { citySelectors } from '../../../redux/cities';
import { cityActions } from '../../../redux/cities';
import { countryOptions } from '../../../constants/countries';
import { Button } from '../../elements';

export const NewCityForm = () => {
	const modalStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			overflow: 'visible',
		},
	};

	const dispatch = useDispatch();
	const { isAddCityOpen, error } = useSelector(citySelectors.getCities);

	const [cityName, setCityName] = useState('');
	const [country, setCountry] = useState('');

	useEffect(() => {
		if (!isAddCityOpen) {
			setCityName('');
		}
	}, [isAddCityOpen]);

	const onCityNameChange = (e) => {
		setCityName(e.target.value);
	};

	const onCountryChange = ({ value }) => {
		setCountry(value);
	};

	const handleCloseModal = () => {
		dispatch(cityActions.addCityClose());
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (cityName) {
			dispatch(cityActions.addCityBegin(cityName, country));
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
				<h3 className="new-city-form__title">Add a new City</h3>
				<form className="new-city-form" onSubmit={handleFormSubmit}>
					<div className="new-city-form__field">
						<label className="new-city-form__label" htmlFor="city">
							City Name
						</label>
						<input
							className="new-city-form__input new-city-form__input--bordered"
							id="username"
							type="text"
							name="city"
							value={cityName}
							onChange={onCityNameChange}
						/>
					</div>
					<div className="new-city-form__field">
						<label className="new-city-form__label" htmlFor="country">
							Country
						</label>
						<Select
							className="new-city-form__input"
							name="country"
							options={countryOptions}
							onChange={onCountryChange}
						/>
					</div>
					{error && (
						<p className="new-city-form__error">
							Could not find a city with the given data.
						</p>
					)}
					<Button className="new-city-form__submit" disabled={!cityName}>
						Submit
					</Button>
				</form>
			</Modal>
		</>
	);
};
