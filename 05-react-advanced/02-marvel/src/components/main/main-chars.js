import { useState } from 'react';
import decoration from '../../img/vision.png';
import CharRandom from '../char-random/char-random';
import CharList from '../char-list/char-list';
import CharInfo from '../char-info/char-info';
import ErrorWrapper from '../error-wrapper/error-wrapper';

const MainChars = () => {

    const [infoChar, setInfoChar] = useState({});

    const onCharActive = (char) => {

        setInfoChar(char);
    } 

    return (
        <main>
            <ErrorWrapper>
                <CharRandom/>
            </ErrorWrapper>
            <div className="char__content">
                <ErrorWrapper>
                    <CharList onCharActive={onCharActive}/>
                </ErrorWrapper>
                <ErrorWrapper>
                    <CharInfo char={infoChar}/>
                </ErrorWrapper>                        
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </main>
    );
};

export default MainChars;