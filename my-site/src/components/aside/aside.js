import { Link } from 'react-scroll';
import './aside.css';
import photo from '../../img/me.jpg';
import gitImg from '../../img/icons8-github-64.png';
import linkedImg from '../../img/icons8-linkedin-64.png';
import cv from '../../files/cv.pdf';

const Aside = () => {
	    
    return (
        <div className="info">
            <div className="aside">
                <div className="photo">
                    <img src={photo} alt="Profile"/>
                </div>
                <div className="links">
                    <div>
                        <a href="https://github.com/mikebychkov" target="_blank"><img src={gitImg}/></a>
                        <a href="https://www.linkedin.com/in/mihail-bychkov/" target="_blank"><img src={linkedImg}/></a>
                    </div>
                </div>
                <div className="nav flex-column">

                    <li className="nav-item">
                        <Link to="about" smooth={true} duration={500} spy={true} className="nav-link" id="nav-about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="skills" smooth={true} duration={500} spy={true} className="nav-link" id="nav-skills">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="experience" smooth={true} duration={500} spy={true} className="nav-link" id="nav-experience">Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="projects" smooth={true} duration={500} spy={true} className="nav-link" id="nav-projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="courses" smooth={true} duration={500} spy={true} className="nav-link" id="nav-courses">Courses & Certificates</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact-me" smooth={true} duration={500} spy={true} className="nav-link" id="nav-contact-me">Contact Me</Link>
                    </li> 

                </div>
                <div className="buttons">
                    <a className="btn btn-light" role="button" target="_blank" download="Mikhail-Bychkov-CV" href={cv}>Download CV</a>        
                    <Link to="contact-me" smooth={true} duration={500} className="btn btn-light">Contact Me</Link>
                </div>
            </div>
        </div>
	);
}

export default Aside;
