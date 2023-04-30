import {Component, useState, useEffect, useMemo, useCallback, useRef} from 'react';
import './App.css';
import Slider from './hooks/slider';
import FSlider from './hooks/fslider';
import FSlider2 from './hooks/fslider2';
import CustomHooks from './custom-hooks/CustomHooks';
import ConcurrentRender from './concurrent-render/ConcurrentRender';
import MemoApp from './memo/memo-app';

function App() {
 
    const [sliderOn, setSliderOn] = useState(true);
 
    const onToggleSlider = () => {
        console.log('TOGGLE SLIDER');
        setSliderOn(sliderOn => !sliderOn);
    };

    return (
    <>
        <MemoApp/>
        {/* <hr/>
        <ConcurrentRender/>
        <hr/>
        <Msg msg="Custom hooks:"/>
        <CustomHooks/>
        <hr/> */}
        {/* <div className="row">
            <div className="col">
                <Msg msg="Class type Component:"/>
                <Slider/>
            </div>
            <div className="col">
                <Msg msg="Function type Component:"/>
                <button className="btn btn-primary m-2" onClick={onToggleSlider}>Toggle slider</button>
                {sliderOn ? <FSlider/> : null}
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col">                
            </div>
            <div className="col">
                <FSlider2/>
            </div>
        </div> */}
    </>
  );
}

const Msg = (props) => {

    return (
        <div style={{'textAlign': 'center'}}>
            <h2>{props.msg}</h2>
        </div>
    );
}

export default App;
