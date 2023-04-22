import { Component } from 'react';
import MarvelService from '../../services/MarvelService';

import randomchardecor from '../../img/mjolnir.png';

class CharRandom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            description: null,
            thumbnail: null,
            homepage: null,
            wiki: null
        };    
        this.updateChar();
    }

    marvelService = new MarvelService();

    updateChar = () => {

        // const id = 1009262; //1009268
        // this.marvelService.getCharacter(id)
        this.marvelService.getRandomCharacter()
            .then(json => {
                this.setState(state => (json));
            });
    }

    render() {

        const {name, description, thumbnail, homepage, wiki} = this.state;

        return (
            <div className="randomchar">
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
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src={randomchardecor} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>        
        );
    }
};

export default CharRandom;