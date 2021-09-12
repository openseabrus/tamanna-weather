import axios from 'axios';

export class Weather {
	static GetByCoordinates({ latitude, longitude }) {
		class GetByCoordinates {
			constructor() {
				this.coordinates = `lat=${latitude}&lon=${longitude}`;
				this.units = 'metric';
			}

			withGivenUnits(units) {
				this.units = units;
			}

			execute() {
				const options = {
					baseURL: 'https://api.openweathermap.org',
					url: `/data/2.5/onecall?appid=${
						process.env.REACT_APP_OPENWEATHERMAP_API_KEY
					}&${this.coordinates}&units=${
						this.units || 'metric'
					}&exclude=minutely,hourly,alerts`,
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

		return new GetByCoordinates();
	}
}
