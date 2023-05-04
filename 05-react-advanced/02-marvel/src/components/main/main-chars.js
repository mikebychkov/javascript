import { useState } from 'react';
import decoration from '../../img/vision.png';
import CharRandom from '../char-random/char-random';
import CharList from '../char-list/char-list';
import CharInfo from '../char-info/char-info';
import ErrorWrapper from '../error-wrapper/error-wrapper';
import CharFind from '../char-find/char-find';

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
                <div>
                    <ErrorWrapper>
                        <CharList onCharActive={onCharActive}/>
                    </ErrorWrapper>
                </div>
                <div>
                    <ErrorWrapper>
                        <CharInfo char={infoChar}/>
                    </ErrorWrapper>    
                    <CharFind/>
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </main>
    );
};

export default MainChars;