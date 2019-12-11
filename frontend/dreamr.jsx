import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
	let preloadedState = undefined;
	const store = configureStore(preloadedState);
	if (window.currentUser) {
		preloadedState = {
			session: {
				currentUser: window.currentUser
			}
		}
	}

	// ! remove these later
	window.getState = store.getState;
	// ! remove these later

	ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});


