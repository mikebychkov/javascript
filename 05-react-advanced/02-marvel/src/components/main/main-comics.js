import { useState, useEffect } from 'react';
import avengersDecoration from '../../img/Avengers.png';
import avengersLogoDecoration from '../../img/Avengers_logo.png';
import MarvelService from '../../services/MarvelService';
import MySpinner from '../spinner/my-spinner';

const MainComics = ({visible, onComicSelect, onPageChange}) => {

    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(true);

    const marvelService = MarvelService();

    const loadComics = () => {

        const initOffset = 0;

        setLoading(true);

        marvelService.getComics(8, initOffset + comics.length)
            .then(newComics => {
                setComics(comics => {
                    return [...comics, ...newComics];
                });
            }).finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        loadComics();
    }, []);

    const mainStyle = visible ? null : {display: 'none'};
    const spinner = loading ? <MySpinner/> : null;

    return (
        <main style={mainStyle}>
            <div className="app__banner">
                <img src={avengersDecoration} alt="Avengers"/>
                <div className="app__banner-text">
                    New comics every week!<br/>
                    Stay tuned!
                </div>
                <img src={avengersLogoDecoration} alt="Avengers logo"/>
            </div>
            <div className="comics__list">
                <ul className="comics__grid">
                    {
                        comics.map((c, i) => {
                            return <MainComicsItem comic={c} key={i} onComicSelect={onComicSelect} onPageChange={onPageChange}/>;
                        })
                    }    
                    {spinner}                
                </ul>
                <button className="button button__main button__long">
                    <div onClick={loadComics} className="inner">load more</div>
                </button>
            </div>
        </main>
    );
};

const MainComicsItem = ({comic, onComicSelect, onPageChange}) => {
    
    return (
        <li className="comics__item">
            <a onClick={() => {onComicSelect(comic); onPageChange(2);}} href="#">
                <img src={comic.thumbnail} alt={comic.title} className="comics__item-img"/>
                <div className="comics__item-name">{comic.title}</div>
                <div className="comics__item-price">{comic.price}$</div>
            </a>
        </li>
    );
}

export default MainComics;