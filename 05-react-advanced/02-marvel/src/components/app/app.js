import { useState } from 'react';
import AppHeader from "../app-header/app-header";
import MainChars from '../main/main-chars';
import MainComics from '../main/main-comics';
import MainComic from '../main/main-comic';

const App = () => {

    const [activePage, setActivePage] = useState(0);
    const [comicListOpened, setComicListOpened] = useState(false);
    const [selectedComic, setSelectedComic] = useState({});

    const onPageChange = (pageId) => {
        if (pageId > 0) {
            setComicListOpened(true);
        }
        setActivePage(pageId);
    };

    const onComicSelect = (comic) => {
        setSelectedComic(comic);
    }

    const comicListContent = (
        <>
        <MainComics visible={activePage === 1} onComicSelect={onComicSelect} onPageChange={onPageChange}/>
        <MainComic visible={activePage === 2} comic={selectedComic} onPageChange={onPageChange}/>
        </>
    );

    return (
        <div className="app">
            <AppHeader activePage={activePage} onPageChange={onPageChange}/>
            <MainChars visible={activePage === 0}/>
            {comicListOpened ? comicListContent : null}
        </div>
    );
};

export default App;