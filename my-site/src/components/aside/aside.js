import './aside.css';
import photo from '../../img/me.jpg';
import gitImg from '../../img/icons8-github-64.png';
import linkedImg from '../../img/icons8-linkedin-64.png';
import cv from '../../files/cv.pdf';

const Aside = ({activeNav, setActiveNav}) => {
	    
    const navClass = (id) => {
        // return `nav-link ${activeNav === id ? 'active' : ''}`;
        return 'nav-link';
    }

    const navOnClick = (e) => {
        // setActiveNav(e.target.id);
    }

    return (
        <div className="info">
            <div className="aside">
                <div className="photo">
                    <img src={photo}/>
                </div>
                <div className="links">
                    <div>
                        <a href="https://github.com/mikebychkov" target="_blank"><img src={gitImg}/></a>
                        <a href="https://www.linkedin.com/in/mihail-bychkov/" target="_blank"><img src={linkedImg}/></a>
                    </div>
                </div>
                <div className="nav flex-column">
                    <li className="nav-item">
                        <a onClick={navOnClick} className={navClass("nav-about")} href="#about" id="nav-about">About</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={navOnClick} className={navClass("nav-skills")} href="#skills" id="nav-skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={navOnClick} className={navClass("nav-experience")} href="#experience" id="nav-experience">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={navOnClick} className={navClass("nav-projects")} href="#projects" id="nav-projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={navOnClick} className={navClass("nav-contact-me")} href="#contact-me" id="nav-contact-me">Contact Me</a>
                    </li>
                </div>
                <div className="buttons">
                    <a className="btn btn-light" role="button" target="_blank" download="Mikhail-Bychkov-CV" href={cv}>Download CV</a>        
                    <a className="btn btn-light" role="button" href="#contact-me">Contact Me</a>    
                </div>
            </div>
        </div>
	);
}

export default Aside;
