import { useState } from 'react';

import './app.css';

import Aside from '../aside/aside';
import Main from '../main/main';

const App = () => {

	// process.env.NODE_ENV
	console.log('process.env.REACT_APP_MY_ENV', process.env.REACT_APP_MY_ENV);

    const [activeNav, setActiveNav] = useState("nav-about");

	return (
		<div className="main-container">
			<Aside activeNav={activeNav} setActiveNav={setActiveNav}/>
			<Main setActiveNav={setActiveNav}/>
		</div>
	);
}

export default App;
