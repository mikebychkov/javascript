
const AppHeader = ({activePage, onPageChange}) => {

    const checkPageIsActive = (pageId) => {
        return pageId === activePage ? 'app__menu__active' : '';
    }

    return (
        <header className="app__header">
            <h1 className="app__title">
                <a href="#" onClick={() => onPageChange(0)}>
                    <span>Marvel</span>
                    information portal
                </a>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li>
                        <a className={checkPageIsActive(0)} href="#" onClick={() => onPageChange(0)}>Characters</a>
                    </li>
                    /
                    <li>
                        <a className={checkPageIsActive(1)} href="#" onClick={() => onPageChange(1)}>Comics</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default AppHeader;