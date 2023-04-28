import avengersDecoration from '../../img/Avengers.png';
import avengersLogoDecoration from '../../img/Avengers_logo.png';

const MainComic = ({comic, visible, onPageChange}) => {

    const mainStyle = visible ? null : {display: 'none'};
    
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
            <ComicRender comic={comic} onPageChange={onPageChange}/>
        </main>
    );
};

const ComicRender = ({comic, onPageChange}) => {

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
            <a onClick={() => onPageChange(1)} href="#" className="single-comic__back">Back to all</a>
        </div>
    );
};

export default MainComic;