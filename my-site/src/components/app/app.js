import { useEffect, useState } from 'react';

import './app.css';

import Aside from '../aside/aside';
import Main from '../main/main';

const App = () => {

    // const [activeNav, setActiveNav] = useState("nav-about");

	return (
		<div className="main-container">
			{/* 
			<Aside activeNav={activeNav} setActiveNav={setActiveNav}/>
			<Main setActiveNav={setActiveNav}/> 
			*/}
			<Aside/>
			<Main/>
		</div>
	);
}

export default App;
