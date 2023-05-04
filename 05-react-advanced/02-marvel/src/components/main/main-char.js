import { Link, useParams } from 'react-router-dom';
import avengersDecoration from '../../img/Avengers.png';
import avengersLogoDecoration from '../../img/Avengers_logo.png';
import MySpinner from '../spinner/my-spinner';
import MarvelService from '../../services/MarvelService';
import useItemRequest from './useItemRequest';

const MainChar = () => {

    const {charId} = useParams();
    const {getChar} = MarvelService();
    const {item, loading} = useItemRequest(getChar, charId);

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
            {loading ? <MySpinner/> : <CharRender char={item}/>}
        </main>
    );
};

const CharRender = ({char}) => {

    if (!char) return null;

    return (
        <div className="single-comic">
            <img src={char.thumbnail} alt={char.name} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{char.name}</h2>
                <p className="single-comic__descr">{char.description}</p>
            </div>
            <Link to="/" className="single-comic__back">Back to all</Link>
        </div>
    );
};

export default MainChar;