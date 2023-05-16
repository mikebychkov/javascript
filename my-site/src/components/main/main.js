import './main.css';

import About from '../about/about';
import Skills from '../skills/skills';
import Experience from '../experience/experience';
import Projects from '../projects/projects';
import ContactMe from '../contact-me/contact-me';

const Main = () => {
	return (
		<div className="main">
			<About/>
			<Skills/>
			<Experience/>
			<Projects/>
			<ContactMe/>
		</div>
	);
}

export default Main;
