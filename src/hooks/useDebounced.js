import { useCallback, useRef } from 'react';

function useDebounced(callback, delay) {
    const timerRef = useRef(null);

    const debouncedCallback = useCallback(
        (...args) => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            timerRef.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
    return debouncedCallback;
}

export default useDebounced;
