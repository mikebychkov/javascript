import { Component } from 'react';

class CharListItem extends Component {

    onSelect = () => {
        this.props.onSetActive(this.props.char);
    }

    render() {
        
        const {char, isActive} = this.props;

        let classString = 'char__item';
        if (isActive) {
            classString += ' char__item_selected';
        }

        const imgStyle = char.thumbnail.indexOf('not_available') > -1 ? { objectFit: "unset" } : {};

        return (
            <li className={classString} onClick={this.onSelect}>
                <img src={char.thumbnail} alt={char.name} style={imgStyle}/>
                <div className="char__name">{char.name}</div>
            </li>
        );
    }
};

export default CharListItem;