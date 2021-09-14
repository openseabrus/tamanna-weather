import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { saveState } from './redux/storePersister';
import throttle from 'lodash/throttle';

store.subscribe(
	throttle(() => {
		saveState({
			cities: store.getState().cities,
		});
	}, 1000)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
