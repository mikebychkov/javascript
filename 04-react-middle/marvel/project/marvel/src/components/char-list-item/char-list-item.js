import charimg from '../../img/abyss.jpg';

const CharListItem = () => {

    return (
        <li class="char__item">
            <img src={charimg} alt="abyss"/>
            <div class="char__name">Abyss</div>
        </li>
    );
};

export default CharListItem;