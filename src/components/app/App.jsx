import React from 'react';
import { Header } from '../header';
import { Cities } from '../cities';
import { NewCityForm } from '../cities/form';

const App = () => {
	return (
		<>
			<Header />
			<Cities />
			<NewCityForm />
		</>
	);
};

export default App;
