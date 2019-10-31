import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';


export const useDarkMode = (key, initialValues) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValues);


    const goingDark = (() => {
        const body = document.querySelector('body');

        if (darkMode === true) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode')
        }
    });

    return [darkMode, setDarkMode, goingDark];
}