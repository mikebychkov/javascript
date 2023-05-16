import './aside.css';

import photo from '../../img/me.jpg';
import gitImg from '../../img/icons8-github-64.png';
import linkedImg from '../../img/icons8-linkedin-64.png';

const Aside = () => {
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
                        <a className="nav-link active" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#experience">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact-me">Contact Me</a>
                    </li>
                </div>
                <div className="buttons">
                    <a className="btn btn-light" role="button">Download CV</a>        
                    <a className="btn btn-light" role="button" href="#contact-me">Contact Me</a>    
                </div>
            </div>
        </div>
	);
}

export default Aside;
