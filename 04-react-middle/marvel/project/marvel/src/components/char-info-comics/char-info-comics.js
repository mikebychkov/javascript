import {Fragment} from 'react';
import CharInfoComicsItem from '../char-info-comics-item/char-info-comics-item';

const CharInfoComics = () => {

    return (
        <Fragment>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                <CharInfoComicsItem/>
                <CharInfoComicsItem/>
                <CharInfoComicsItem/>
                <CharInfoComicsItem/>
                <CharInfoComicsItem/>
            </ul>
        </Fragment>
    );
};

export default CharInfoComics;