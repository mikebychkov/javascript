import { Component } from 'react';

import CharInfoComics from '../char-info-comics/char-info-comics';
import CharInfoSkeleton from '../char-info-skeleton/char-info-skeleton';
import MySpinner from '../spinner/my-spinner';

class CharInfo extends Component {

    render() {

        const {id, name, description, thumbnail, homepage, wiki} = this.props.char;

        if (!id) {
            return <MySpinner/>
        }

        return (
            <div className="char__info">
                <div className="char__basics">
                    <img src={thumbnail} alt={name}/>
                    <div>
                        <div className="char__info-name">{name}</div>
                        <div className="char__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="char__descr">
                    {description}
                </div>
                <CharInfoComics charId={id} comics={this.props.comics}/>
                <CharInfoSkeleton/>
            </div>
        )
    }
};

export default CharInfo;