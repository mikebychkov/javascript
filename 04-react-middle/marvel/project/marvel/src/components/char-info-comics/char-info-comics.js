import { Component } from 'react';
import {Fragment} from 'react';
import CharInfoComicsItem from '../char-info-comics-item/char-info-comics-item';


class CharInfoComics extends Component {

    render() {

        const {comics} = this.props;
        let content = comics.map(it => {
            return <CharInfoComicsItem comicName={it.title} key={it.id}/>;
        });
        if (comics.length === 0) {
            content = <CharInfoComicsItem comicName="No comics data available..." key={0}/>;
        }
    
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