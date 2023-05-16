import './about.css';

const About = () => {
	return (
		<div className="header-container">
			<div className="header">
				<a href="#about" id="about"><h1>Hi,</h1></a>
				<h2>my name is</h2>
				<h2>Bychkov Mikhail</h2>
				<div className="decor"></div>
				<br/><br/>
				<p>
					I'm a <span className="accent">software developer</span> with more than <span className="accent">18 years experience</span> in field located in Uzbekistan, Tashkent (UTC+5).
				</p>
				<br/><br/>
				<a className="btn btn-light" role="button">Download CV</a>    
			</div>
		</div>
	);
}

export default About;
