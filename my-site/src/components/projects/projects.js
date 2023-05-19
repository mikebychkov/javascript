import { useEffect, useState } from 'react';
import './projects.css';
import DataService from '../services/data-service';

const Projects = ({token}) => {
	
	// console.debug('render projects');

	const [exp, setExp] = useState([]);

	const { getProjects } = DataService(token);

	useEffect(() => {
		getProjects()
		.then(ex => {
			setExp(ex);
		});
	}, []);

	return (
		<div className="projects" id="projects">
			<a href="#projects"><h2>Projects</h2></a>
			<div className="decor"></div>

			<div className="timeline">
				{
					exp.map(ex => <Position key={ex.id} {...ex} />)
				}
			</div>

		</div>
	);
}

const Position = ({start, end, position, organization, description}) => {

	return (
		<div className="position">
			<div className="position-bind">
				<span>{start}-</span>
				<span>-{end}</span>
			</div>
			<div className="desription">
				<h4>{position}</h4>
				<i>{organization}</i>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default Projects;
