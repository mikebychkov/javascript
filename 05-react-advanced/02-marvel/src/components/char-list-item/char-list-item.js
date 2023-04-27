
const CharListItem = ({char, isActive, onSetActive}) => {

    const onSelect = () => {
        onSetActive(char);
    }

    let classString = 'char__item';
    if (isActive) {
        classString += ' char__item_selected';
    }

    const imgStyle = char.thumbnail.indexOf('not_available') > -1 ? { objectFit: "unset" } : {};

    return (
        <li className={classString} onClick={onSelect}>
            <img src={char.thumbnail} alt={char.name} style={imgStyle}/>
            <div className="char__name">{char.name}</div>
        </li>
    );
};

export default CharListItem;