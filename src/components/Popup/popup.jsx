import React, { useState, useEffect } from 'react';
import './popup.css';

const MePopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerHeight < 500) { // asumsi tinggi window kurang dari 500px ketika keyboard muncul
                setIsKeyboardVisible(true);
            } else {
                setIsKeyboardVisible(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const togglePopup = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={togglePopup}>Toggle Popup</button>
            {isVisible && (
                <div className={`popup ${isKeyboardVisible ? 'popup-keyboard-visible' : ''}`}>
                    <div className="popup-content">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type here..."
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MePopup;