import types from './types';

const initialState = {};

export default function (state = initialState, action) {
	switch (action.type) {
		case types.ADD_CITY:
			return { ...state, [action.payload.id]: action.payload };
		default:
			return state;
	}
}
