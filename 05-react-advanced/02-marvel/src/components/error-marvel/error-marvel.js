// import errorImg from '../../img/error404anime.png';
import errorImg from '../../img/error404travolta2.gif';
import './error-marvel.css';

const ErrorMarvel = () => {

    return (
        <div className="randomchar__block">
            {/* <img src={process.env.PUBLIC_URL + '/error404travolta2.gif'} alt="error" className="error__img"/> */}
            <img src={errorImg} alt="error" className="error__img"/>
        </div>        
    );
};

export default ErrorMarvel;