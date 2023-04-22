
import CharListItem from "../char-list-item/char-list-item";

const CharList = () => {

    return (
        <div className="char__list">
            <ul className="char__grid">
                <CharListItem/>
                <CharListItem/>
                <CharListItem/>
                <CharListItem/>
                <CharListItem/>
                <CharListItem/>
                <CharListItem/>
                <CharListItem/>
                <CharListItem/>
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    );
};

export default CharList;