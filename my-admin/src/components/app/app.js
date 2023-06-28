import { useSelector } from 'react-redux';

import './app.css';

import Aside from '../aside/aside';
import Main from '../main/main';
import Login from '../login/login';

const App = () => {

	const token = useSelector(state => state.e.token);
	const sidebar = useSelector(state => state.e.sidebar);

	let mainContainerClass = 'main-container';
	if (!sidebar) {
		mainContainerClass += ' side-min';
	}	

	return (
		token ?
		<div className={mainContainerClass}>
			<Aside/>
			<Main/>
		</div>
		: <Login/>
	);
}

export default App;
