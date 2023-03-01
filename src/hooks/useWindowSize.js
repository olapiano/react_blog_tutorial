import { useState, useEffect } from 'react';

const useWindowSize = () => {
    const [windowSize, setWindewSize] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
        const handleResize = () => {
            setWindewSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        handleResize();

        window.addEventListener('resize', handleResize);

        // cleanup to prevent memory leak
        const cleanUp = () => {
            window.removeEventListener('resize', handleResize);
        }

        return cleanUp;

        // alt: return () => window window.removeEventListener('resize', handleResize);

    }, []); 

    return windowSize;
}

export default useWindowSize;