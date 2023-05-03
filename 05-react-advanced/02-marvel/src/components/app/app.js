import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHeader from "../app-header/app-header";
import MainChars from '../main/main-chars';
import MainChar from '../main/main-char';
import MainComics from '../main/main-comics';
import MainComic from '../main/main-comic';
import MySpinner from '../spinner/my-spinner';
import AppContext from './app-context';
// import Page404 from '../main/404';

const Page404 = lazy(() => import('../main/404')); // 'lazy()' IMPORT WORKS WITH 'Suspense' COMPONENT

const App = () => {

    const [selectedComic, setSelectedComic] = useState({});
    const [selectedChar, setSelectedChar] = useState({});

    const onComicSelect = (comic) => {
        setSelectedComic(comic);
    }
    const onCharSelect = (char) => {
        setSelectedChar(char);
    }

    const { Provider } = AppContext;

    return (
        <BrowserRouter>
            <div className="app">
                <AppHeader/>
                <Suspense fallback={<MySpinner/>}>
                <Provider value={{onCharSelect}}>
                <Routes>
                    <Route path="/" element={<MainChars/>} onCharSelect={onCharSelect}/>
                    <Route path="/characters/:charId" element={<MainChar char={selectedChar}/>}/>
                    <Route path="/comics" element={<MainComics onComicSelect={onComicSelect}/>}/>
                    <Route path="/comics/:comicId" element={<MainComic comic={selectedComic}/>}/>

                    {/* NESTED ROUTE'S WORK WITH 'OUTLET' COMPONENT IN PARENT ROUTE ELEMENT ONLY */}
                    {/* <Route path="comics" element={<MainComics onComicSelect={onComicSelect}/>}>  
                        <Route path=":comicId" element={<MainComic comic={selectedComic}/>}/>
                    </Route> */}
                    
                    <Route path="*" element={<Page404/>}/>
                </Routes>
                </Provider>
                </Suspense>
            </div>
        </BrowserRouter>
    );
};

export default App;