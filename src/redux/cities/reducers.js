import types from './types';

const initialState = {
	isAddCityOpen: false,
	cityList: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case types.ADD_CITY:
			return { ...state, isAddCityOpen: true };
		case types.ADD_CITY_CLOSE:
			return { ...state, isAddCityOpen: false };
		case types.SAVE_CITY:
			return {
				...state,
				cityList: [...state.cityList, action.payload],
				isAddCityOpen: false,
			};
		case types.REMOVE_CITY:
			return {
				...state,
				cityList: state.cityList.filter(({ id }) => id !== action.payload),
			};
		default:
			return state;
	}
}
