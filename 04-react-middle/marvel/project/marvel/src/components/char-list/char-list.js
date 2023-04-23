import { Component } from 'react';
import MarvelService from '../../services/MarvelService';

import CharListItem from "../char-list-item/char-list-item";

class CharList extends Component {

    marvelService = new MarvelService();

    constructor(props) {
        super(props);
        this.state = {
            activeChar: {},
            chars: [],
            initOffset: Math.floor(Math.random() * 20) * 100
        };
        this.loadChars();
    }

    onSetActive = (char) => {

        this.setState({activeChar: char});
        this.props.onCharActive(char);
    }

    loadChars = () => {

        const resentOffset = this.state.initOffset + this.state.chars.length;

        this.marvelService.getCharacters(9, resentOffset)
            .then(newChars => {
                this.setState(state => {
                    const rsl = [...state.chars, ...newChars];
                    this.props.onCharActive(rsl[0]);
                    return ({chars: rsl, activeChar: rsl[0]});
                });
            });
    }

    render() {

        const {chars, activeChar} = this.state;

        let content = chars.map(it => {
            return <CharListItem key={it.id} char={it} onSetActive={this.onSetActive} isActive={it.id === activeChar.id}/>;
        });

        return (
            <div className="char__list">
                <ul className="char__grid">
                    {content}
                </ul>
                <button className="button button__main button__long" onClick={this.loadChars}>
                    <div className="inner">load more</div>
                </button>
            </div>
        );
    }
};

export default CharList;