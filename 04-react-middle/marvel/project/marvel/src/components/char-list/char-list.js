import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import CharListItem from "../char-list-item/char-list-item";
import MySpinner from '../spinner/my-spinner';

class CharList extends Component {

    marvelService = new MarvelService();

    constructor(props) {
        super(props);
        this.state = {
            activeChar: {},
            chars: [],
            initOffset: Math.floor(Math.random() * 20) * 100,
            loading: true,
            charEnded: false
        };     
        console.debug('CHAR-LIST CONSTRUCTOR');
    }

    componentDidMount() {
        console.debug('CHAR-LIST MOUNTED');
        this.loadChars();
    }

    componentDidUpdate(prevProps, prevState) {
        console.debug('CHAR-LIST UPDATED');
    }

    componentWillUnmount() {
        console.debug('CHAR-LIST UNMOUNT');
    }

    onSetActive = (char) => {

        console.debug('CHAR-LIST ON-SET-ACTIVE');

        if (!char) return;

        this.setState({activeChar: char});
        this.props.onCharActive(char);
    }

    loadChars = () => {

        console.debug('CHAR-LIST LOAD-CHARS');

        this.setState({loading: true});
        
        const resentOffset = this.state.initOffset + this.state.chars.length;

        this.marvelService.getCharacters(9, resentOffset)
            .then(newChars => {
                this.setState(state => {
                    const rsl = [...state.chars, ...newChars];
                    this.props.onCharActive(rsl[0]);
                    return ({chars: rsl, activeChar: rsl[0], loading: false, charEnded: newChars.length < 9});
                });
            }).catch((e) => {
                console.error('ERROR FETCHING CHARACTERS', e);
            });
    }

    render() {

        console.debug('CHAR-RANDOM RENDER');

        const {chars, activeChar, loading, charEnded} = this.state;

        const content = chars.map(it => {
            return <CharListItem key={it.id} char={it} onSetActive={this.onSetActive} isActive={it.id === activeChar.id}/>;
        });

        const spinner = loading ? <MySpinner/> : null;
        const btnStyle = charEnded ? {display: 'none'} : {display: 'block'};

        return (
            <div className="char__list">
                <ul className="char__grid">
                    {content}
                    {spinner}
                </ul>
                <button className="button button__main button__long" onClick={this.loadChars} disabled={loading} style={btnStyle}>
                    <div className="inner">load more</div>
                </button>
            </div>
        );
    }
};

export default CharList;