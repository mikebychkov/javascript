import { useEffect, useState } from 'react';
import './main.css';
import DataTable from '../data-table/data-table';
import DataService from '../services/data-service';

const Main = ({token, entityName}) => {

	const [data, setData] = useState([]);

	useEffect(() => {

		const {getUsers, getSkills, getProjects, getExperience, getCourses, getEmails} = DataService(token);

		const entityResolver = {
			users: getUsers,
			skills: getSkills,
			projects: getProjects,
			experience: getExperience,
			courses: getCourses,
			emails: getEmails
		}

		if (entityResolver[entityName]) {
			entityResolver[entityName]()
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
