import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import avengersDecoration from '../../img/Avengers.png';
import avengersLogoDecoration from '../../img/Avengers_logo.png';
import MarvelService from '../../services/MarvelService';
import MySpinner from '../spinner/my-spinner';

const MainComics = ({onComicSelect}) => {

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

    const spinner = loading ? <MySpinner/> : null;

    return (
        <main>
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
                            return <MainComicsItem comic={c} key={i} onComicSelect={onComicSelect}/>;
                        })
                    }    
                    {spinner}                
                </ul>
                <button className="button button__main button__long">
                    <div onClick={loadComics} className="inner">load more</div>
                </button>
            </div>
            <Outlet/>
        </main>
    );
};

const MainComicsItem = ({comic, onComicSelect}) => {
    
    return (
        <li className="comics__item">
            <Link to={`${comic.id}`} onClick={() => {onComicSelect(comic)}}>
                <img src={comic.thumbnail} alt={comic.title} className="comics__item-img"/>
                <div className="comics__item-name">{comic.title}</div>
                <div className="comics__item-price">{comic.price}$</div>
            </Link>
        </li>
    );
}

export default MainComics;