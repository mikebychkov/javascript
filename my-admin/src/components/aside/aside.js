import './aside.css';
import logoutImg from '../../img/logout.png';

const Aside = ({setToken, setEntityName, setSidebar, sidebar}) => {

    const onLogout = () => {
        localStorage.removeItem('at');
        setToken(null);
    }

    const onEntityNameClick = e => {
        const entityName = e.target.getAttribute('data-entity');
        setEntityName(entityName);   
    }

    const mainButtonOnClick = () => {
        setSidebar(!sidebar);
    }

    let sidebarClass = 'sidebar';
    let sidebarContentClass = 'sidebar-content';
    let sidebarBottomClass = 'sidebar-bottom'
    let headerClass = 'header';

    if (!sidebar) {
        sidebarClass += ' sidebar-min';
        sidebarContentClass += ' sidebar-content-min';
        sidebarBottomClass += ' sidebar-bottom-min'
        headerClass += ' header-min';
    }

	return (
        <div className="aside">

            <div className={sidebarClass}>

                <div className={headerClass}>MY ADMIN</div>
                <button onClick={mainButtonOnClick} className="sidebar-main-btn btn btn-outline-primary">...</button>

                <div className={sidebarContentClass}>

                    <div className="list-group list-group-flush">
                        <a onClick={onEntityNameClick} data-entity="users" href="#" className="list-group-item list-group-item-action">Users</a>
                        <a onClick={onEntityNameClick} data-entity="skills" href="#" className="list-group-item list-group-item-action">Skills</a>
                        <a onClick={onEntityNameClick} data-entity="experience" href="#" className="list-group-item list-group-item-action">Experience</a>
                        <a onClick={onEntityNameClick} data-entity="projects" href="#" className="list-group-item list-group-item-action">Projects</a>
                        <a onClick={onEntityNameClick} data-entity="courses" href="#" className="list-group-item list-group-item-action">Courses</a>
                        <a onClick={onEntityNameClick} data-entity="emails" href="#" className="list-group-item list-group-item-action">Emails</a>
                    </div> 

                </div>

                <div className={sidebarBottomClass}>
                    <div className="list-group list-group-flush">
                        <a onClick={onLogout} href="#" className="list-group-item list-group-item-action">
                            <img src={logoutImg} alt="logout"/>
                            <span>Logout</span>
                        </a>
                    </div>
                </div>

            </div>

        </div>
	);
}

export default Aside;
