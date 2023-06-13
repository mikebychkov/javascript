import { useEffect, useState } from 'react';
import './main.css';
import DataTable from '../data-table/data-table';
import DataService from '../services/data-service';
import { resolveEntityGetMethod } from '../services/entity-resolve-service';

const Main = ({token, entityName}) => {

	const [data, setData] = useState([]);

	useEffect(() => {

		const entGet = resolveEntityGetMethod(token, entityName);

		if (entGet) {
			entGet()
			.then(d => setData(d));
		}

	}, [entityName]);

	return (
		<div className="main">

			<div className="header">{entityName}</div>

			<div className="main-content">
				<DataTable data={data} entityName={entityName}/>          
			</div>            

		</div>
	);
}

export default Main;
