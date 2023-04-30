import {createContext} from 'react';

const context = createContext({
    mail: "name@example.com",
    text: 'some text',
    updateMail: () => {}
});

export default context;