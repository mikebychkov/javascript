import './counter.css';
import { connect } from 'react-redux';

import * as actions from '../../js/actions';

const Counter = ({counter, inc, dec, rnd}) => {

    const onRndClick = () => {
        const val = Math.floor(Math.random() * 10);
        rnd(val);
    }

    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={onRndClick} className="btn btn-primary">RND</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        counter: state.value
    };
}

export default connect(mapStateToProps, actions)(Counter);