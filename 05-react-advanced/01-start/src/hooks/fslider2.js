import {Component, useState, useEffect, useMemo, useCallback, useRef} from 'react';
import {Container} from 'react-bootstrap';

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

export default FSlider2;