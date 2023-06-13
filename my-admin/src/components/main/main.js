import { useEffect, useState } from 'react';
import './main.css';
import DataTable from '../data-table/data-table';
import { resolveEntityRequestMethod } from '../services/entity-resolve-service';

const Main = ({token, entityName}) => {

	const [data, setData] = useState([]);
	const {get, post, del} = resolveEntityRequestMethod(token, entityName);

	useEffect(() => {

		if (get) {
			get()
			.then(d => setData(d));
		}

	}, [entityName]);

	return (
		<div className="main">

			<div className="header">{entityName}</div>

			<div className="main-content">
				<DataTable data={data} entityName={entityName} postRequest={post} deleteRequest={del}/>          
			</div>            

		</div>
	);
}

export default Main;
