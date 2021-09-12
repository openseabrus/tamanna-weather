import types from './types';

const addCity = (city) => ({
	type: types.ADD_CITY,
	payload: city,
});

const removeCity = (city) => ({
	type: types.REMOVE_CITY,
	payload: city,
});

export default {
	addCity,
	removeCity,
};
