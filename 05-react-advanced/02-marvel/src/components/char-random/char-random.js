import { useState, useEffect } from 'react';
import MarvelService from '../../services/MarvelService';
import MySpinner from '../spinner/my-spinner';
import ErrorMarvel from '../error-marvel/error-marvel';
import randomchardecor from '../../img/mjolnir.png';

const CharRandom = () => {

    const marvelService = new MarvelService();

    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        updateChar();

    }, []);

    const updateChar = () => {

        setLoading(true);

        marvelService.getRandomCharacter()
            .then(json => {
                setChar(json);
            }).catch((e) => {
                console.error('ERROR FETCHING CHAR', e);
            }).finally(() => {
                setLoading(false);
            });
    }

    return (
        <div className="randomchar">
            
            {loading ? <MySpinner/> : <CharRender char={char}/>}                
            
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main" onClick={updateChar}>
                    <div className="inner">try it</div>
                </button>
                <img src={randomchardecor} alt="mjolnir" className="randomchar__decoration"/>
            </div>            
        </div>        
    );
};

const CharRender = ({char}) => {

    if (!char || !char.id) return <ErrorMarvel/>;

    const {name, description, thumbnail, homepage, wiki} = char;

    const imgClass = thumbnail.indexOf('not_available') > -1 ? 'randomchar__img__wide' : 'randomchar__img';

    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" className={imgClass}/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {description}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CharRandom;