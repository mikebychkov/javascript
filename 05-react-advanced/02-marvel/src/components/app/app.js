import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHeader from "../app-header/app-header";
import MainChars from '../main/main-chars';
import MainChar from '../main/main-char';
import MainComics from '../main/main-comics';
import MainComic from '../main/main-comic';
import MySpinner from '../spinner/my-spinner';
// import Page404 from '../main/404';

const Page404 = lazy(() => import('../main/404')); // 'lazy()' IMPORT WORKS WITH 'Suspense' COMPONENT

const App = () => {

    return (
        <BrowserRouter>
            <div className="app">
                <AppHeader/>
                <Suspense fallback={<MySpinner/>}>
                <Routes>
                    <Route 
                        path="/" 
                        element={<MainChars/>}
                    />
                    <Route 
                        path="/characters/:charId" 
                        element={<MainChar/>}
                    />
                    <Route 
                        path="/comics" 
                        element={<MainComics/>}
                    />
                    <Route 
                        path="/comics/:comicId" 
                        element={<MainComic/>}
                    />

                    {/* NESTED ROUTE'S WORK WITH 'OUTLET' COMPONENT IN PARENT ROUTE ELEMENT ONLY */}
                    {/* <Route path="comics" element={<MainComics onComicSelect={onComicSelect}/>}>  
                        <Route path=":comicId" element={<MainComic comic={selectedComic}/>}/>
                    </Route> */}
                    
                    <Route 
                        path="*" 
                        element={<Page404/>}
                    />
                </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    );
};

export default App;