import './counter.css';

import { useSelector, useDispatch } from 'react-redux';

import {inc, dec, rnd} from '../../js/actions';

const Counter = () => {

    const counter = useSelector(state => state.value);
    const dispatch = useDispatch();
    
    const onRndClick = () => {
        const val = Math.floor(Math.random() * 10);
        dispatch(rnd(val));
    }

    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">INC</button>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">DEC</button>
            <button onClick={onRndClick} className="btn btn-primary">RND</button>
        </div>
    );
}

export default Counter;