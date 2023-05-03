import { Link, useParams } from 'react-router-dom';
import avengersDecoration from '../../img/Avengers.png';
import avengersLogoDecoration from '../../img/Avengers_logo.png';

const MainComic = ({comic}) => {

    // const {comicId} = useParams();   
    // console.log(comicId);

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
            <ComicRender comic={comic}/>
        </main>
    );
};

const ComicRender = ({comic}) => {

    return (
        <div className="single-comic">
            <img src={comic.thumbnail} alt={comic.title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{comic.title}</h2>
                <p className="single-comic__descr">{comic.description}</p>
                <p className="single-comic__descr">{comic.pages} pages</p>
                {/* <p className="single-comic__descr">Language: en-us</p> */}
                <div className="single-comic__price">{comic.price}$</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
    );
};

export default MainComic;