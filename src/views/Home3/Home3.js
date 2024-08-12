import React, { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import './home3.css';
import pitzza from '../Asset/pitzza .png';

export const Home3 = () => {
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
    config: { duration: 500 }
  });

  return (
    <div className="bg-light" style={{ minHeight: '100vh' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-2">
        <a className="navbar-brand ml-5" href="#">
          <i className="fas fa-dove" style={{ fontSize: '25px' }}></i>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto list-unstyled my-3 my-md-0">
            <li className="nav-item mx-2">
              <a className="nav-link text-dark dropdown-toggle" data-toggle="dropdown" href="#">Home</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-dark" href="#">About</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-dark" href="#">Contact</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-dark" href="#">Shop</a>
            </li>
          </ul>
          <form action="" className="form-inline mr-3">
            <div className="input-group input-group-sm">
              <input type="text" placeholder="search" className="form-control" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary btn-sm">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>
      <div className="container-fluid position-relative">
        <div className="row bg-warning" style={{ height: '95vh', position: 'relative' }}>
          <div className="col-md-12 d-flex align-items-center justify-content-center position-relative">
            <div className="ml-5 pl-5 d-flex justify-content-center align-items-center" style={{ position: 'relative', width: '100%' }}>
              <div className="text-wrapper" style={{ fontSize: '15rem' }}>
                {transitions((styles, item) => (
                  <animated.div style={styles} className="animated-text">
                    {item}
                  </animated.div>
                ))}
              </div>
              <div className="position-absolute text-center" style={{ top: '50%', right: '7%', transform: 'translateY(-50%)' }}>
                <div className="d-flex flex-column align-items-center">
                  <div className="d-flex">
                    <a className="btn btn-outline-light btn-lg mx-2" href="">Fieliale</a>
                    <a className="btn btn-light btn-lg mx-2" href="">Bestllung</a>
                  </div>
                  <a href="/" className="hover-effect mt-3 mr-5">Login mit Ihrer Adresse</a>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-center" style={{ height: '100%' }}>
                <img src={pitzza} alt="Pizza" className="img-fluid" style={{ width: '350px', height: 'auto', marginLeft: '150px' ,transform: 'rotate(20deg)'  }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light py-5">
        <div className="container">
          <div className="text-center">
            <h1 className="text-warning">Vielen Dank</h1>
            <p className="text-metude my-5 text-color-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="">
          </div>
        </div>
      </div>
    </div>
  );
};
