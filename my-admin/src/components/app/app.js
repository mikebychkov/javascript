import { useState } from 'react';
import './app.css';
import Aside from '../aside/aside';
import Main from '../main/main';
import Login from '../login/login';

const App = () => {

	const [token, setToken] = useState(localStorage.at);
	const [entityName, setEntityName] = useState('users');
	const [sidebar, setSidebar] = useState(true);

	let mainContainerClass = 'main-container';
	if (!sidebar) {
		mainContainerClass += ' side-min';
	}

	return (
		token ?
		<div className={mainContainerClass}>
			<Aside setToken={setToken} setEntityName={setEntityName} setSidebar={setSidebar} sidebar={sidebar}/>
			<Main token={token} entityName={entityName}/>
		</div>
		: <Login setToken={setToken}/>
	);
}

export default App;
