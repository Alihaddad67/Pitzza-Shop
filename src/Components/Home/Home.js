// import { useAuth } from './../Hooks/useAuth.jsx';
// import Carousel from 'react-bootstrap/Carousel';
// import p1 from '../Asset/p1.jpg';
// import p2 from '../Asset/p2.jpeg';
// import p3 from '../Asset/p3.jpg';

// export const Home = () => {
//     const { logout, user } = useAuth();
//     console.log(user);
//     return (
//         <div>
//             <h1>This is Home {user.firstName}</h1>
//             <Carousel interval={3000} controls={true} indicators={true}>
//                 <Carousel.Item>
//                     <img
//                         className="d-block mx-auto"
//                         style={{ width: '600px', height: '300px' }}
//                         src={p1}
//                         alt="First slide"
//                     />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block mx-auto"
//                         style={{ width: '600px', height: '300px' }}
//                         src={p2}
//                         alt="Second slide"
//                     />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block mx-auto"
//                         style={{ width: '600px', height: '300px' }}
//                         src={p3}
//                         alt="Third slide"
//                     />
//                 </Carousel.Item>
//             </Carousel>
//             <button className="btn btn-outline-secondary" onClick={logout}>LogOut</button>
//         </div>
//     );
// };


// import { useAuth } from './../Hooks/useAuth.jsx';
// import p1 from '../Asset/p1.jpg';
// import p2 from '../Asset/p2.jpeg';
// import p3 from '../Asset/p3.jpg';
// import './home.css'; // اضافه کردن CSS

// export const Home = () => {
//     const { logout, user } = useAuth();
//     console.log(user);
//     return (
//         <div>
//             <h1>This is Home {user.firstName}</h1>
//             <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3000">
//                 <ol className="carousel-indicators">
//                     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//                     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//                     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//                 </ol>
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <img className="d-block carousel-image" src={p1} alt="First slide" />
//                     </div>
//                     <div className="carousel-item">
//                         <img className="d-block carousel-image" src={p2} alt="Second slide" />
//                     </div>
//                     <div className="carousel-item">
//                         <img className="d-block carousel-image" src={p3} alt="Third slide" />
//                     </div>
//                 </div>
//                 <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="sr-only">Previous</span>
//                 </a>
//                 <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="sr-only">Next</span>
//                 </a>
//             </div>
//             <button className="btn btn-outline-secondary" onClick={logout}>LogOut</button>
//         </div>
//     );
// };





import React from 'react';
import { useAuth } from './../Hooks/useAuth.jsx';
import p1 from '../Asset/p1.jpg';
import p2 from '../Asset/p2.jpeg';
import p3 from '../Asset/p3.jpg';
import './home.css';
import { useNavigate } from 'react-router-dom';


export const Home = () => {
    const { logout,user  } = useAuth();
    const navigate = useNavigate();


    const handelLoginClick = () => {
        navigate('/')
    }
    return (
        <div>
            {user ? (
                <div>
                    <h1>This is Home {user.firstName}</h1>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3000">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block carousel-image" src={p1} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block carousel-image" src={p2} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block carousel-image" src={p3} alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <button className="btn btn-outline-secondary" onClick={logout}>LogOut</button>
                </div>
            ) : (
                <div>
                    <div>
                    <h1>This is Homepage</h1>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3000">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block carousel-image" src={p1} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block carousel-image" src={p2} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block carousel-image" src={p3} alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                     <button className="btn btn-outline-secondary" onClick={handelLoginClick}>Login</button>
                </div>
            )}
        </div>
    );
};

