import './main.css';
import About from '../about/about';
import Skills from '../skills/skills';
import Experience from '../experience/experience';
import Projects from '../projects/projects';
import Courses from '../courses/courses';
import ContactMe from '../contact-me/contact-me';

const Main = ({token}) => {

	return (
		<div className="main">

			<About/>
			<Skills token={token}/>
			<Experience token={token}/>
			<Projects token={token}/>
			<Courses token={token}/>
			<ContactMe token={token}/> 

		</div>
	);
}

export default Main;
