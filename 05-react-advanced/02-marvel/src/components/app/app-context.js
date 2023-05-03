import { createContext } from 'react';

const AppContext = createContext({
    onCharSelect: () => {}
});

export default AppContext;