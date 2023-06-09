import './aside.css';

const Aside = () => {
	return (
        <div className="aside">

            <div className="sidebar">

                <div className="header">MY ADMIN</div>
                <button className="sidebar-main-btn btn btn-outline-primary">...</button>

                <div className="sidebar-content">

                    <div className="list-group list-group-flush">
                        <a href="#" className="list-group-item list-group-item-action">Users</a>
                        <a href="#" className="list-group-item list-group-item-action">Skills</a>
                        <a href="#" className="list-group-item list-group-item-action">Experience</a>
                        <a href="#" className="list-group-item list-group-item-action">Projects</a>
                        <a href="#" className="list-group-item list-group-item-action">Courses</a>
                        <a href="#" className="list-group-item list-group-item-action">Emails</a>
                    </div> 

                </div>

            </div>

        </div>
	);
}

export default Aside;
