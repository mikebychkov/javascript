import { useEffect, useState } from 'react';
import './experience.css';
import DataService from '../services/data-service';

const Experience = () => {

	console.log('render experience');

	const [exp, setExp] = useState([]);

	const { getExperience } = DataService();

	useEffect(() => {
		getExperience()
		.then(ex => {
			setExp(ex);
		});
	}, []);

	return (
		<div className="experience">
			<a href="#experience" id="experience"><h2>Experience</h2></a>
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

export default Experience;
