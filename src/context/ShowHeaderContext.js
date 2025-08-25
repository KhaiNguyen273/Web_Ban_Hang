import { createContext, useState } from 'react';
const showHeaderContext = createContext();
function ShowHeaderProvider({ children }) {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showHeader, setShowHeader] = useState(true);
    const handleScroll = () => {
        if (window.scrollY > lastScrollY && lastScrollY > 70) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
        setLastScrollY(window.scrollY);
    };

    const value = {
        showHeader,
        handleScroll,
        setShowHeader,
        lastScrollY,
        setLastScrollY,
    };
    return <showHeaderContext.Provider value={value}>{children}</showHeaderContext.Provider>;
}

export { showHeaderContext, ShowHeaderProvider };
