import uuidv4 from '../../utils/uuid';
import types from './types';

const initialState = {
	isAddCityOpen: false,
	cityList: [],
	error: null,
	loading: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case types.OPEN_ADD_CITY:
			return { ...state, isAddCityOpen: true };
		case types.ADD_CITY_CLOSE:
			return { ...state, isAddCityOpen: false };
		case types.ADD_CITY_BEGIN:
			return {
				...state,
				error: null,
				loading: true,
			};
		case types.ADD_CITY_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case types.ADD_CITY_SUCCESS:
			return {
				...state,
				cityList: [...state.cityList, { ...action.payload[0], id: uuidv4() }],
				isAddCityOpen: false,
				loading: false,
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
