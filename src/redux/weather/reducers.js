import types from './types';

const initialState = {};

export default function (state = initialState, action) {
	// Avoid loading the same location multiple times
	const locationKey = `${action.payload?.latitude}|${action.payload?.longitude}`;

	switch (action.type) {
		case types.FETCH_WEATHER_BEGIN:
			return {
				...state,
				[locationKey]: {
					loading: true,
					error: null,
				},
			};
		case types.FETCH_WEATHER_ERROR:
			return {
				...state,
				[locationKey]: {
					loading: false,
					error: action.payload.error,
				},
			};
		case types.FETCH_WEATHER_SUCCESS:
			return {
				...state,
				[locationKey]: {
					loading: false,
					error: null,
					...action.payload.data,
				},
			};
		default:
			return state;
	}
}
