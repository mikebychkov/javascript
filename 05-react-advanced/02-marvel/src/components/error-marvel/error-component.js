import errorImg from '../../img/error.gif';
import './error-marvel.css';

const ErrorComponent = () => {

    return (
        <div className="randomchar__block">
            <img src={errorImg} alt="error" className="error__img"/>
        </div>        
    );
};

export default ErrorComponent;