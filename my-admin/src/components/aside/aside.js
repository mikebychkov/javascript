import './aside.css';
import logoutImg from '../../img/logout.png';
import { resolveEntityList } from '../services/entity-resolve-service';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setEntityName, toggleSidebar } from '../redux/entitySlice';

const Aside = () => {

    const dispatch = useDispatch();
    const sidebar = useSelector(state => state.e.sidebar);

    const onLogout = () => {
        localStorage.removeItem('at');
        dispatch(setToken(null));
    }

    const onEntityNameClick = e => {
        const entityName = e.target.getAttribute('data-entity');
        dispatch(setEntityName(entityName));
    }

    const mainButtonOnClick = () => {
        dispatch(toggleSidebar());
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
                        {
                            resolveEntityList().map(e => {
                                return <a onClick={onEntityNameClick} data-entity={e} key={e} href="#" className="list-group-item list-group-item-action">{e}</a>;
                            })
                        }
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
