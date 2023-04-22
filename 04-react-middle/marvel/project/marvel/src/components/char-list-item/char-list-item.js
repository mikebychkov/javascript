import charimg from '../../img/abyss.jpg';

const CharListItem = () => {

    return (
        <li className="char__item">
            <img src={charimg} alt="abyss"/>
            <div className="char__name">Abyss</div>
        </li>
    );
};

export default CharListItem;