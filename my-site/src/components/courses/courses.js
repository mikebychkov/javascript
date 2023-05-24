import { useEffect, useState } from 'react';
import './courses.css';
import DataService from '../services/data-service';

const Courses = ({token}) => {
	
	// console.debug('render projects');

	const [exp, setExp] = useState([]);

	useEffect(() => {
		const { getCourses } = DataService(token);
		getCourses()
		.then(ex => {
			setExp(ex);
		});
	}, []);

	const years = [...new Set(exp.map(c => c.year).sort().reverse())];

	return (
		<div className="courses" id="courses">
			<a href="#courses"><h2>Courses & Certificates</h2></a>
			<div className="decor"></div>

			<div className="timeline">

				{
					years.map(y => <Position key={y} year={y} courses={ [...exp.filter(e => e.year === y)] }/>)
				} 

			</div>

		</div>
	);
}

const Position = ({year, courses}) => {

	return (
		<div className="position">
			<div className="desription">
				<h4>{year}:</h4>
				<ul>
					{
						typeof(courses) === 'object' && courses.length ? courses.map( c => <li key={c.id}>{c.name}</li> ) : null						
					}					
				</ul>	
			</div>
		</div> 
	);
}

export default Courses;
