import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import MySpinner from '../spinner/my-spinner';
import ErrorMarvel from '../error-marvel/error-marvel';

import randomchardecor from '../../img/mjolnir.png';

class CharRandom extends Component {

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
        this.updateChar();
    }

    marvelService = new MarvelService();

    updateChar = () => {

        this.setState({loading: true});

        this.marvelService.getRandomCharacter()
            .then(json => {
                this.setState(state => ({char: json, loading: false}));
            }).catch(() => {
                console.error('ERROR FETCHING CHAR');
            });
    }

    render() {

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

    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" className="randomchar__img"/>
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