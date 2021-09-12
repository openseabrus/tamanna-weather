import types from './types';

const addCity = () => ({
	type: types.ADD_CITY,
});

const addCityClose = () => ({
	type: types.ADD_CITY_CLOSE,
});

const saveCity = (city) => ({
	type: types.SAVE_CITY,
	payload: city,
});

const removeCity = (id) => ({
	type: types.REMOVE_CITY,
	payload: id,
});

export default {
	addCity,
	addCityClose,
	saveCity,
	removeCity,
};
