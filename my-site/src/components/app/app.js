import './app.css';

import Aside from '../aside/aside';
import Main from '../main/main';

const App = () => {
	return (
		<div className="main-container">
			<Aside/>
			<Main/>
		</div>
	);
}

export default App;
