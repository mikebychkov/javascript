import {Component, useState, useEffect, useMemo, useCallback, useRef} from 'react';
import {Container} from 'react-bootstrap';
import CustomHooks from './CustomHooks';
import './App.css';

///////////////////////////////////////////////////////////////////////////////////////////////////

class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            autoplay: false,
            slide: 0
        }
    }

    componentDidMount() {
        document.title = `Slide #${this.state.slide}`;
    }

    componentDidUpdate() {
        document.title = `Slide #${this.state.slide}`;
    }

    changeSlide = (i) => {
        this.setState(({slide}) => ({
            slide: slide + i
        }))
    }

    toggleAutoplay = () => {
        this.setState(({autoplay}) => ({
            autoplay: !autoplay
        }))
    }

    render() {
        return (
            <Container>
                <div className="slider w-100 m-auto">
                    <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                    <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
                    <div className="buttons mt-3">
                        <button 
                            className="btn btn-primary me-2"
                            onClick={() => this.changeSlide(-1)}>-1</button>
                        <button 
                            className="btn btn-primary me-2"
                            onClick={() => this.changeSlide(1)}>+1</button>
                        <button 
                            className="btn btn-primary me-2"
                            onClick={this.toggleAutoplay}>toggle autoplay</button>
                    </div>
                </div>
            </Container>
        )
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

const FSlider = (props) => {

    // STATE

    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    const changeSlide = (i) => {
        setSlide(slide => slide + i);
    }
    
    const toggleAutoplay = () => {
        setAutoplay(autoplay => !autoplay);
    }

    // EFFECT

    const logging = () => {
        console.log('logging ' + new Date());
    }

    useEffect(() => {
        console.log('effect on init AND update slide state');
        document.title = `Slide #${slide}`;
    }, [slide]);

    useEffect(() => {
        console.log('effect on init ONLY (componentDidMount analog)');

        window.addEventListener('click', logging);

        return () => {                                       // RETURNING FUNCTION IS ANALOG TO 'componentWillUnmount'
            window.removeEventListener('click', logging);
        };

    }, []);

    // MEMO

    const autoplayText = useMemo(() => {
        return autoplay ? 'auto' : null;
    }, [autoplay]);


    // REF

    const myRef = useRef(null);

    const onPicClick = () => {
        myRef.current.focus();
    };

    return (
        <Container>
            <div className="slider w-100 m-auto">
                <img onClick={onPicClick} className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                {/* <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div> */}
                <div className="text-center mt-5">Active slide {slide} <br/> {autoplayText}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
                <div>
                    <input ref={myRef} className="" placeholder="Input here"/>
                </div>
            </div>
        </Container>
    )
}

///////////////////////////////////////////////////////////////////////////////////////////////////

const FSlider2 = (props) => {

    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    const changeSlide = (i) => {
        setSlide(slide => slide + i);
    }
    
    const toggleAutoplay = () => {
        setAutoplay(autoplay => !autoplay);
    }

    // CALLBACK

    const getNewImages = useCallback(() => {

        console.log('IMAGE REQUEST');

        if (slide === 0) {
            return ['https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'];
        }

        return [
            'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
            'https://www.agoda.com/wp-content/uploads/2020/07/Statue-of-Liberty-things-to-do-in-new-york-USA.jpg'
        ];
    }, [slide]);


    return (
        <Container>
            <div className="slider w-100 m-auto">
                
                <Slide getNewImages={getNewImages}/>
                
                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

const Slide = ({getNewImages}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(getNewImages());
    }, [getNewImages]);

    return images.map((img, i) => {
        return <img key={i} className="d-block w-100" src={img} alt="slide" />;
    });
}

///////////////////////////////////////////////////////////////////////////////////////////////////

const Msg = (props) => {

    return (
        <div style={{'textAlign': 'center'}}>
            <h2>{props.msg}</h2>
        </div>
    );
}

function App() {
 
    const [sliderOn, setSliderOn] = useState(true);
 
    const onToggleSlider = () => {
        console.log('TOGGLE SLIDER');
        setSliderOn(sliderOn => !sliderOn);
    };

    return (
    <>
        <Msg msg="Custom hooks:"/>
        <CustomHooks/>
        <hr/>
        <div className="row">
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
        </div>
    </>
  );
}

export default App;
