import { useState, useEffect, useRef } from 'react';

export default function useAddSectionVisible(initialIsVisible) {
    const [isAddSectionVisible, setIsAddSectionVisible] = useState(initialIsVisible);
    const sectionRef = useRef(null);

    const handleClickOutside = (event) => {
        if (sectionRef.current && !sectionRef.current.contains(event.target)) {
            setIsAddSectionVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { sectionRef, isAddSectionVisible, setIsAddSectionVisible };
}