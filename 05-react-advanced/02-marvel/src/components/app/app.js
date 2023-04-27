import { useState } from 'react';
import decoration from '../../img/vision.png';
import AppHeader from "../app-header/app-header";
import CharRandom from '../char-random/char-random';
import CharList from '../char-list/char-list';
import CharInfo from '../char-info/char-info';
import ErrorWrapper from '../error-wrapper/error-wrapper';

const App = () => {

    const [infoChar, setInfoChar] = useState({});

    const onCharActive = (char) => {

        setInfoChar(char);
    } 

    return (
        <div className="app">
            <AppHeader/>
            <br/>
            <div className="main">
                <CharRandom/>
                <div className="char__content">
                    <CharList onCharActive={onCharActive}/>
                    <ErrorWrapper>
                        <CharInfo char={infoChar}/>
                    </ErrorWrapper>                        
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </div>
        </div>
    );
};

export default App;