// src/components/ScrollToTopButton.js

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // FontAwesome'dan yukarı ok ikonu

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Scroll durumunu kontrol eden kanca
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Sayfanın en üstüne kaydıran fonksiyon
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        isVisible && (
            <div
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-3 cursor-pointer shadow-lg hover:bg-blue-700 transition-colors"
                style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <FaArrowUp />
            </div>
        )
    );
}
