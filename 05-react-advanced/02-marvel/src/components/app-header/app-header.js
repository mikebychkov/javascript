import { Link, NavLink } from 'react-router-dom';

const AppHeader = () => {

    localStorage.clear();

    const activeStyle = ({isActive}) => {return isActive ? {'color' : '#9f0013'} : {}};

    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span>
                    information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li>
                        <NavLink end style={activeStyle} to="/">Characters</NavLink>
                    </li>
                    /
                    <li>
                        {/* NOT USING 'END' TO SET LINK ACTIVE EVEN ON PARTIAL URL'S */}
                        <NavLink style={activeStyle} to="/comics">Comics</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default AppHeader;