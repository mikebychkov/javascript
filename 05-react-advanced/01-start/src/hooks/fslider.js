import {Component, useState, useEffect, useMemo, useCallback, useRef} from 'react';
import {Container} from 'react-bootstrap';

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

export default FSlider;