import './app.css';
import Aside from '../aside/aside';
import Main from '../main/main';
import DataService from '../services/data-service';

const App = () => {

	const { getToken } = DataService();
	const token = getToken()
		.then(json => {
			return json.token;
		});

	return (
		<div className="main-container">
			<Aside/>
			<Main token={token}/>
		</div>
	);
}

export default App;
