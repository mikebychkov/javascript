import decoration from '../../img/vision.png';
import AppHeader from "../app-header/app-header";
import CharRandom from '../char-random/char-random';
import CharList from '../char-list/char-list';
import CharInfo from '../char-info/char-info';

const App = () => {

    return (
        <div className="app">
            <AppHeader/>
            <div className="main">
                <CharRandom/>

                <div className="char__content">
                    <CharList/>
                    <CharInfo/>
                </div>

                <img className="bg-decoration" src={decoration} alt="vision"/>
            </div>
        </div>
    );
};

export default App;