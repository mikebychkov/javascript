import { useState, useEffect } from 'react';
import CharInfoComics from '../char-info-comics/char-info-comics';
import MySpinner from '../spinner/my-spinner';
import CharInfoSkeleton from '../char-info-skeleton/char-info-skeleton';
import MarvelService from '../../services/MarvelService';
import { cacheObject, restoreCachedArray } from '../tools/localCache';

const CharInfo = ({char}) => {

    const marvelService = MarvelService();

    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadComics = () => {

        if (!char.id) return;

        if (comics.length === 0) {
            if (restoreCachedArray('charInfoComics', setComics, setLoading)) {
                return;
            }
        }

        setLoading(true);

        marvelService.getCharComics(char.id)
        .then(arr => {
            setComics(arr);
        }).finally(() => {
            setLoading(false);
        });        
    }

    useEffect(() => {
        loadComics();
    }, [char]);

    useEffect(() => {
        if (comics.length === 0) return;
        cacheObject('charInfoComics', comics);
    }, [comics]);

    const skeleton = !char.id ? <CharInfoSkeleton/> : null;

    return (
        <div>
            <div className="char__info">
                {skeleton}
                <CharRender char={char} />
                {loading ? <MySpinner/> : <CharInfoComics comics={comics}/>}
            </div>
        </div>
    )
};

const CharRender = ({char}) => {

    if (!char || !char.id) return null;

    const {name, description, thumbnail, homepage, wiki} = char;

    const imgStyle = thumbnail.indexOf('not_available') > -1 ? { objectFit: "contain" } : {};

    return (
        <>
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
        </>
    );
};

export default CharInfo;