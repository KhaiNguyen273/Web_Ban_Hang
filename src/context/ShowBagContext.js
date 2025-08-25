import { useState, createContext } from 'react';
const showBagContext = createContext();

function ShowBagProvider({ children }) {
    const [showBag, setShowBag] = useState(false);
    const value = {
        showBag,
        setShowBag,
    };

    return <showBagContext.Provider value={value}>{children}</showBagContext.Provider>;
}

export { ShowBagProvider, showBagContext };
