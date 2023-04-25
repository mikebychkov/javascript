import { Component } from 'react';
import PropTypes from 'prop-types';
import CharInfoComics from '../char-info-comics/char-info-comics';
import CharInfoSkeleton from '../char-info-skeleton/char-info-skeleton';
import MySpinner from '../spinner/my-spinner';

class CharInfo extends Component {

    render() {

        // this.pr.pr.data = []; // ERROR TO TEST ERROR-WRAPPER

        const {id, name, description, thumbnail, homepage, wiki} = this.props.char;

        if (!id) {
            // return <CharInfoSkeleton/>;
            return <MySpinner/>;
        }

        const imgStyle = thumbnail.indexOf('not_available') > -1 ? { objectFit: "contain" } : {};

        return (
            <div className="char__info">
                <div className="char__basics">
                    <img src={thumbnail} alt={name} style={imgStyle}/>
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
            </div>
        )
    }
};

CharInfo.propTypes = {
    char: PropTypes.object,
    comics: PropTypes.array
};

export default CharInfo;