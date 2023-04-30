import {useContext} from 'react';
import context from './context';

const InputComponent = () => {

    const {mail, updateMail} = useContext(context);

    return (
        <input value={mail} 
            onFocus={() => updateMail('super@focus.de')}
            type="email" 
            className='form-control' 
            id="exampleFormControlInput1" 
            placeholder="name@example.com"/>
    );
}

export default InputComponent;