import { NotificationManager } from 'react-notifications';
import { Geolocation } from '../../api';
import types from './types';

const addCity = () => ({
	type: types.OPEN_ADD_CITY,
});

const addCityError = (error) => ({
	type: types.ADD_CITY_ERROR,
	payload: error,
});

const addCityClose = () => ({
	type: types.ADD_CITY_CLOSE,
});

const addCitySuccess = (city) => ({
	type: types.ADD_CITY_SUCCESS,
	payload: city,
});

const removeCity = (id) => ({
	type: types.REMOVE_CITY,
	payload: id,
});

const addCityBegin = (city, country) => {
	return (dispatch) => {
		dispatch({
			type: types.ADD_CITY_BEGIN,
			payload: city,
		});

		Geolocation.GetCoordinates(city, country)
			.execute()
			.then(({ data }) => {
				console.info(data);
				if (data && data.length) {
					dispatch(addCitySuccess(data));
					NotificationManager.success('Added city');
				} else {
					dispatch(addCityError('empty data'));
					NotificationManager.error('Failed to add city');
				}
			})
			.catch((error) => dispatch(addCityError({ city, error })));
	};
};

export default {
	addCity,
	addCityClose,
	addCitySuccess,
	removeCity,
	addCityBegin,
};
