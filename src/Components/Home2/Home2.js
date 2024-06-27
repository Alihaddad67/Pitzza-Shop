// import React, { useState, useEffect } from 'react';
// import './Home2.css';

// export const Home2 = () => {
//   const texts = [
//     "gute Essen und lecker Gricht",
//     "kostenlose Lieferung und schneller",
//     "Hot Hot Hot mit gute Matereiale"
//   ];
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 3000); // Change text every 3 seconds

//     return () => clearInterval(interval);
//   }, [texts.length]);

//   return (
//     <div className="home2">
//       <nav className="navbar">
//         <div className="navbar-container">
//           <a href="#" className="navbar-logo">PitzzaShop</a>
//           <ul className="navbar-menu">
//             <li className="navbar-item"><a href="#" className="navbar-link">Home</a></li>
//             <li className="navbar-item"><a href="#" className="navbar-link">About</a></li>
//             <li className="navbar-item"><a href="#" className="navbar-link">Services</a></li>
//             <li className="navbar-item"><a href="#" className="navbar-link">Contact</a></li>
//           </ul>
//         </div>
//       </nav>
//       <header className="header">
//         <div className="header-content">
//           <h1 className="header-title">{texts[currentTextIndex]}</h1>
//         </div>
//       </header>
//     </div>
//   );
// };


// Home2.jsx
// import React from 'react';
// import { useSpring, animated } from '@react-spring/web';

//  export const Home2 = () => {
//   const props = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: 1 },
//     config: { duration: 1000 },
//     loop: { reverse: true }
//   });

//   return (
//     <div className="home2-container">
//       <animated.div style={props} className="animated-text">
//         gute Essen und lecker gricht
//       </animated.div>
//     </div>
//   );
// };



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

