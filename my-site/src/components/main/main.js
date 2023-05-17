import './main.css';

import About from '../about/about';
import Skills from '../skills/skills';
import Experience from '../experience/experience';
import Projects from '../projects/projects';
import ContactMe from '../contact-me/contact-me';
import { useEffect } from 'react';

const Main = ({setActiveNav}) => {

	const magnetLinks = {};
	const traceActiveNavLink = () => {
		
		const anchors = document.querySelectorAll('.main a[href^="#"]');
		anchors.forEach(el => {
			const viewportOffset = el.getBoundingClientRect();
			if (viewportOffset.top > -100 && viewportOffset.top < 100) {
				if (!magnetLinks[el.id]) {
					window.location.href = el;
					magnetLinks[el.id] = true;
				}
				const elToActivate = document.querySelector(`.nav-link[href="#${el.id}"]`);
				setActiveNav(elToActivate.id);
			} else {
				magnetLinks[el.id] = false;
			}
		});
	};
	
	useEffect(() => {
		traceActiveNavLink();
		window.addEventListener('scroll', traceActiveNavLink);	
		return () => {
			window.removeEventListener('scroll', traceActiveNavLink);
		};
	}, []);

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
