import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { loadState } from './storePersister';

const persistedState = loadState();

export default createStore(
	rootReducer,
	persistedState,
	composeWithDevTools(applyMiddleware(thunk))
);
