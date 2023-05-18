import { useState, useEffect } from 'react';

import './skills.css';
import DataService from '../services/data-service';

const Skills = ({token}) => {

	// console.debug('render skills');

	const [skills, setSkills] = useState([]);

	const { getSkills } = DataService(token);

	useEffect(() => {
		getSkills()
		.then(ss => {
			setSkills(ss);
		});
	}, []);

	return (
		<div className="skills">
			<a href="#skills" id="skills"><h2>Skills</h2></a>
			<div className="decor"></div>

			<div className="skills-container">
				{
					skills.map(s => <Skill key={s.id} {...s}/>)
				}
			</div>
		</div>
	);
}

const Skill = ({name, percent}) => {

	const progress = {width: `calc(${percent}%)`};

	return (
		<div className="card">
			<div className="skill-percent">
				<div className="skill">{name}</div>
				<div className="percent">{percent}%</div>
			</div>
			<div className="bar"><div className="progress" style={progress}></div></div>
		</div>
	);
}

export default Skills;
