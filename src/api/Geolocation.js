import axios from 'axios';

export class Geolocation {
	static GetCoordinates(city, country) {
		class GetCoordinates {
			execute() {
				const options = {
					baseURL: 'https://api.openweathermap.org',
					url: `/geo/1.0/direct?appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&limit=1&${this.coordinates}&q=${city},${country}`,
					method: 'GET',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json;charset=UTF-8',
					},
					params: this.params,
				};
				return axios(options);
			}
		}

		return new GetCoordinates();
	}
}
