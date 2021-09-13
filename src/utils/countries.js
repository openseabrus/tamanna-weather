import { countryOptions } from '../constants/countries';

export const getCountryNameByCode = (countryCode) => {
	if (countryCode) {
		return countryOptions.find(({ value }) => value === countryCode)?.label;
	}
	return null;
};
