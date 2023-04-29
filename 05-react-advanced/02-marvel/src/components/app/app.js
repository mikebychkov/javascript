import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHeader from "../app-header/app-header";
import MainChars from '../main/main-chars';
import MainComics from '../main/main-comics';
import MainComic from '../main/main-comic';
import Page404 from '../main/404';

const App = () => {

    const [selectedComic, setSelectedComic] = useState({});

    const onComicSelect = (comic) => {
        setSelectedComic(comic);
    }

    return (
        <BrowserRouter>
            <div className="app">
                <AppHeader/>
                <Routes>
                    <Route path="/" element={<MainChars/>}/>
                    <Route path="/comics" element={<MainComics onComicSelect={onComicSelect}/>}/>
                    <Route path="/comics/:comicId" element={<MainComic comic={selectedComic}/>}/>

                    {/* NESTED ROUTE'S WORK WITH 'OUTLET' COMPONENT IN PARENT ROUTE ELEMENT ONLY */}
                    {/* <Route path="comics" element={<MainComics onComicSelect={onComicSelect}/>}>  
                        <Route path=":comicId" element={<MainComic comic={selectedComic}/>}/>
                    </Route> */}
                    
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;