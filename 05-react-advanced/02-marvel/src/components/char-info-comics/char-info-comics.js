import PropTypes from 'prop-types';
import CharInfoComicsItem from '../char-info-comics-item/char-info-comics-item';

const CharInfoComics = ({comics}) => {

    let content = comics.map(it => {
        return <CharInfoComicsItem comicName={it.title} key={it.id}/>;
    });
    if (comics.length === 0) {
        content = <CharInfoComicsItem comicName="No comics data available..." key={0}/>;
    }

    return (
        <>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {content}
            </ul>
        </>
    );
};

CharInfoComics.propTypes = {
    comics: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        id: PropTypes.number
    }))
};

export default CharInfoComics;