import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchToken } from '../redux/stateSlice';

import Aside from '../aside/aside';
import Main from '../main/main';

import './app.css';

const App = () => {

	const dispatch = useDispatch();
	
	useEffect(() => {

		dispatch(fetchToken());

	// eslint-disable-next-line
	}, []);

	return (
		<div className="main-container">
			<Aside/>
			<Main/>
		</div>
	);
}

export default App;
