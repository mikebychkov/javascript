import { Component } from 'react';

import decoration from '../../img/vision.png';
import AppHeader from "../app-header/app-header";
import CharRandom from '../char-random/char-random';
import CharList from '../char-list/char-list';
import CharInfo from '../char-info/char-info';

import MarvelService from '../../services/MarvelService';

class App extends Component {

    marvelService = new MarvelService();

    constructor(props) {
        super(props);
        this.state = {
            infoChar: {},
            comics: []
        };
        console.debug('APP CONSTRUCTOR');
    }

    componentDidMount() {
        console.debug('APP MOUNTED');
    }

    componentDidUpdate(prevProps, prevState) {
        console.debug('APP UPDATED');
    }

    componentWillUnmount() {
        console.debug('APP UNMOUNT');
    }

    onCharActive = (char) => {

        console.debug('APP ON-CHAR-ACTIVE');

        this.setState({infoChar: {}, comics: []});

        if (!char) return;

        this.marvelService.getComics(char.id)
        .then(arr => {
            this.setState({infoChar: char, comics: arr});
        });        
    } 

    render() {

        const {infoChar, comics} = this.state; 

        return (
            <div className="app">
                <AppHeader/>
                <div className="main">
                    <CharRandom/>
    
                    <div className="char__content">
                        <CharList onCharActive={this.onCharActive}/>
                        <CharInfo char={infoChar} comics={comics}/>
                    </div>
    
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </div>
            </div>
        );
    }
};

export default App;