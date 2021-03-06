import { createStore, compose } from 'redux';
import { rootReducer } from './reducers';

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : (f: any) => f
);

export const store = createStore(rootReducer, enhancers);

if (module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').rootReducer;
		store.replaceReducer(nextRootReducer);
	});
}
