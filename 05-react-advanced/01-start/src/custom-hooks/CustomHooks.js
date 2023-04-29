import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const useInputWithValidation = (initValue) => {

    const [value, setValue] = useState(initValue);

    const onChange = event => {
        setValue(event.target.value);
    };

    const validate = () => {
        return value.search(/\d/) > -1;
    };

    return {value, onChange, validate};
};

const Form = () => {

    const text = useInputWithValidation('');
    const textArea = useInputWithValidation('');

    const color = text.validate() ? 'text-danger' : null;

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <input value={`${text.value} / ${textArea.value}`} 
                            type="text" 
                            className="form-control" 
                            readOnly/>
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input value={text.value} 
                            onChange={text.onChange} 
                            type="email" 
                            className={`form-control ${color}`} 
                            id="exampleFormControlInput1" 
                            placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={textArea.value} 
                            onChange={textArea.onChange} 
                            className="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3">
                    </textarea>
                </div>
            </form>
        </Container>
    )
};

const CustomHooks = () => {
    return (
        <Form/>
    );
};

export default CustomHooks;
