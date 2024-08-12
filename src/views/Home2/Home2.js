


import React, { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import './Home2.css';

export const Home2 = () => {
    const texts = [
        "gute Essen und lecker Gricht",
        "kostenlose Lieferung und schneller",
        "Hot Hot Hot mit gute Matereiale"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 6000); // Change text every 6 seconds

        return () => clearInterval(interval);
    }, [texts.length]);

    const transitions = useTransition(texts[index], {
        from: { opacity: 0, transform: 'translateX(-20px)' },
        enter: { opacity: 1, transform: 'translateX(0px)' },
        leave: { opacity: 0, transform: 'translateX(20px)' },
        config: { duration: 500}
    });

    return (
        <div className="home2">
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="#" className="navbar-logo">PitzzaShop</a>
                    <ul className="navbar-menu">
                        <li className="navbar-item"><a href="#" className="navbar-link">Home</a></li>
                        <li className="navbar-item"><a href="#" className="navbar-link">About</a></li>
                        <li className="navbar-item"><a href="#" className="navbar-link">Services</a></li>
                        <li className="navbar-item"><a href="#" className="navbar-link">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div className="home2-container">
                <div className="background-image"></div>
                <div className="text-wrapper">
                    {transitions((styles, item) => (
                        <animated.div style={styles} className="animated-text">
                            {item}
                        </animated.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home2;

