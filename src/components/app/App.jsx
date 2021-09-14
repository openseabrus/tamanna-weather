import React from 'react';
import { Header } from '../header';
import { Cities } from '../cities';
import { NewCityForm } from '../cities/form';
import { NotificationContainer } from 'react-notifications';

const App = () => {
	return (
		<>
			<Header title="Guilherme Seabra" />
			<Cities />
			<NewCityForm />
			<NotificationContainer />
		</>
	);
};

export default App;
