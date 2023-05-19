import { useState, useEffect } from 'react';
import './skills.css';
import DataService from '../services/data-service';

const Skills = ({token}) => {

	// console.debug('render skills');

	const [skills, setSkills] = useState([]);
	const [init, setInit] = useState(false);

	useEffect(() => {
		if (!init) return;
		const { getSkills } = DataService(token);
		getSkills()
		.then(ss => {
			setSkills(ss);
		});
	}, [init]);

	const startInit = () => {
		const skillsElem = document.querySelector('#skills');
		const viewportOffset = skillsElem.getBoundingClientRect();
		if (viewportOffset.top > -100 && viewportOffset.top < 100) {
			setInit(true);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', startInit);
		return () => {
			window.removeEventListener('scroll', startInit);
		}
	}, []);

	return (
		<div className="skills" id="skills">
			<a href="#skills"><h2>Skills</h2></a>
			<div className="decor"></div>

			<div className="skills-container">
				{
					skills.map((s, i) => <Skill key={s.id} {...s} idx={i}/>)
				}
			</div>
		</div>
	);
}

const Skill = ({name, percent, idx}) => {

	const progress = {width: `calc(${percent}%)`};


	const left = {
		'animation': `slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${idx * 100}ms both`
	}

	const right = {
		'animation': `slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${idx * 100}ms both`		
	}

	const anim = idx % 2 === 0 ? left : right;

	return (
		<div className="card" style={anim}>
			<div className="skill-percent">
				<div className="skill">{name}</div>
				<div className="percent">{percent}%</div>
			</div>
			<div className="bar"><div className="progress" style={progress}></div></div>
		</div>
	);
}

export default Skills;
