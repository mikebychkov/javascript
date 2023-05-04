import { Link, useParams } from 'react-router-dom';
import avengersDecoration from '../../img/Avengers.png';
import avengersLogoDecoration from '../../img/Avengers_logo.png';
import MySpinner from '../spinner/my-spinner';
import MarvelService from '../../services/MarvelService';
import useItemRequest from './useItemRequest';

const MainComic = () => {

    const {comicId} = useParams();   
    const {getComic} = MarvelService();
    const {item, loading} = useItemRequest(getComic, comicId);

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
            {loading ? <MySpinner/> : <ComicRender comic={item}/>}
        </main>
    );
};

const ComicRender = ({comic}) => {

    if (!comic) return null;

    return (
        <div className="single-comic">
            <img src={comic.thumbnail} alt={comic.title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{comic.title}</h2>
                <p className="single-comic__descr">{comic.description}</p>
                <p className="single-comic__descr">{comic.pages} pages</p>
                <div className="single-comic__price">{comic.price}$</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
    );
};

export default MainComic;