import { useState } from 'react';
import useLocalStorage from './useLocalStorage';


const useDarkMode = (key, initialValue, cb) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValues);


}