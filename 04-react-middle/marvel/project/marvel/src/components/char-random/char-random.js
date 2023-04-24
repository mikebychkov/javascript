import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import MySpinner from '../spinner/my-spinner';
import ErrorMarvel from '../error-marvel/error-marvel';

import randomchardecor from '../../img/mjolnir.png';

class CharRandom extends Component {

    marvelService = new MarvelService();

    constructor(props) {
        super(props);
        this.state = {
            char: {
                name: null,
                description: null,
                thumbnail: null,
                homepage: null,
                wiki: null,
            },
            loading: true
        };        
        console.debug('CHAR-RANDOM CONSTRUCTOR');
    }

    componentDidMount() {
        console.debug('CHAR-RANDOM MOUNTED');
        this.updateChar();
    }

    componentDidUpdate(prevProps, prevState) {
        console.debug('CHAR-RANDOM UPDATED');
    }

    componentWillUnmount() {
        console.debug('CHAR-RANDOM UNMOUNT');
    }

    updateChar = () => {

        console.debug('CHAR-RANDOM UPDATE');

        this.setState({loading: true});

        this.marvelService.getRandomCharacter()
            .then(json => {
                this.setState(state => ({char: json, loading: false}));
            }).catch((e) => {
                console.error('ERROR FETCHING CHAR', e);
            });
    }

    render() {

        console.debug('CHAR-RANDOM RENDER');

        const {char, loading} = this.state;

        return (
            <div className="randomchar">
                
                {loading ? <MySpinner/> : <CharRender char={char}/>}                
                
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main" onClick={this.updateChar}>
                        <div className="inner">try it</div>
                    </button>
                    <img src={randomchardecor} alt="mjolnir" className="randomchar__decoration"/>
                </div>            
            </div>        
        );
    }
};

const CharRender = ({char}) => {

    if (!char) return <ErrorMarvel/>;

    const {name, description, thumbnail, homepage, wiki} = char;

    const imgClass = thumbnail.indexOf('not_available') > -1 ? 'randomchar__img__wide' : 'randomchar__img';

    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" className={imgClass}/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {description}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CharRandom;