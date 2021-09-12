import { Weather } from '../../api/Weather';
import types from './types';

const fetchWeatherByCoordinatesBegin = (latitude, longitude) => {
	return (dispatch) => {
		dispatch({
			type: types.FETCH_WEATHER_BEGIN,
			payload: { latitude, longitude },
		});

		Weather.GetByCoordinates({ latitude, longitude })
			.execute()
			.then(({ data }) => {
				dispatch(fetchWeatherByCoordinatesSuccess({ latitude, longitude, data }));
			})
			.catch((error) =>
				dispatch(fetchWeatherByCoordinatesError({ latitude, longitude, error }))
			);
	};
};

const fetchWeatherByCoordinatesError = (locationError) => ({
	type: types.FETCH_WEATHER_ERROR,
	payload: locationError,
});

const fetchWeatherByCoordinatesSuccess = (locationData) => ({
	type: types.FETCH_WEATHER_SUCCESS,
	payload: locationData,
});

export default {
	fetchWeatherByCoordinatesBegin,
	fetchWeatherByCoordinatesError,
	fetchWeatherByCoordinatesSuccess,
};
