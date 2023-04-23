import { Component } from 'react';
import {Fragment} from 'react';
import CharInfoComicsItem from '../char-info-comics-item/char-info-comics-item';


class CharInfoComics extends Component {

    render() {

        const {comics} = this.props;
        const content = comics.map(it => {
            return <CharInfoComicsItem comicName={it.title} key={it.id}/>;
        });
    
        return (
            <Fragment>
                <div className="char__comics">Comics:</div>
                <ul className="char__comics-list">
                    {content}
                </ul>
            </Fragment>
        );
    }
};

export default CharInfoComics;