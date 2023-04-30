import {useState} from 'react';
import Form from './form';
import context from './context';

/**
 * KEY WORDS:
 * - createContext
 * - useContext
 */

function ContextApp() {

    const updateMail = (m) => {
        setData(data => ({...data, mail: m}));
    }

    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text',
        updateMail: updateMail
    });

    const {Provider} = context;

    return (
        <Provider value={data}>
            <Form mail={data.mail} text={data.text}/>
            <button 
                onClick={() => setData({
                    mail: "second@example.com",
                    text: 'another text',
                    updateMail: updateMail
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default ContextApp;
