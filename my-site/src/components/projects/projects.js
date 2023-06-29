import { useEffect, useState } from 'react';
import './projects.css';
import DataService from '../services/data-service';

const Projects = ({token}) => {
	
	const [exp, setExp] = useState([]);

	useEffect(() => {
		const { getProjects } = DataService(token);
		getProjects()
		.then(ex => {
			setExp(ex);
		});
	// eslint-disable-next-line
	}, [token]);

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

const Position = ({start, end, industry, description, role, technologies, responsibilities}) => {

	return (
		<div className="position">
			<div className="position-bind">
				<span>{start}-</span>
				<span>-{end}</span>
			</div>
			<div className="desription">
				<h4>{description}</h4>

				<i>Industry:</i>
				<p>{industry}</p>

				<i>Role:</i>
				<p>{role}</p>

				<i>Technologies:</i>
				<p>{technologies}</p>

				<i>Responsibilities:</i> 
				<ul>			
					{
						typeof(responsibilities) === 'object' && responsibilities.length ? responsibilities.map((r,i) => <li key={i}>{r}</li>) : null
					}				
				</ul>
			</div>
		</div>
	);
}

export default Projects;
