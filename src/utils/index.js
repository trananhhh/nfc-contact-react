import { useEffect, useState } from 'react';

export const copyContent = (target, setTarget) => {
    navigator.clipboard.writeText(target);
    setTarget('Copied!');
    setTimeout(() => {
        setTarget(target);
    }, 1500);
};

// export const changeTheme = () => {
//     window
//         .matchMedia('(prefers-color-scheme: dark)')
//         .addEventListener('change', () => {
//             if (window.matchMedia('(prefers-color-scheme: light)').matches)
//                 document.body.classList.add('light');
//             else document.body.classList.remove('light');
//         });
// };

// export const getTheme = () => {
//     return window.matchMedia('(prefers-color-scheme: dark)').matches
//         ? ''
//         : ' light';
// };

export const useThemeDetector = () => {
    const getCurrentTheme = () =>
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
    const mqListener = (e) => {
        setIsDarkTheme(e.matches);
    };

    useEffect(() => {
        const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
        darkThemeMq.addListener(mqListener);
        return () => darkThemeMq.removeListener(mqListener);
    }, []);

    if (isDarkTheme) document.body.classList.remove('light');
    else document.body.classList.add('light');

    return isDarkTheme ? '' : ' light';
};
