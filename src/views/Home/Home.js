import React from 'react';
import { useAuth } from '../../hooks/useAuth.jsx';
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpeg';
import p3 from '../../assets/p3.jpg';
import './home.css';
import { useNavigate } from 'react-router-dom';
import { CustomNav } from '../../components/Nav';

export const Home = () => {
    const {  user } = useAuth();
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/');
    };

    return (
        <div>
            {user ? (
                <div>
                    <CustomNav />
                    <h1>This is Home {user.firstName}</h1>
                    <div id="carouselExampleIndicators" className="carousel slide my-5" data-ride="carousel" data-interval="3000">
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

                    <div className="row">
                        {/* Best Sellers Section */}
                        <div className="col-md-4">
                            <h2>Best Sellers</h2>
                            <div className="card ch1 mb-3">
                                <img className="card-img-top cit1" src={p1} alt="Best Seller 1" />
                                <div className="card-body">
                                    <h5 className="card-title">Product 1</h5>
                                </div>
                            </div>
                            <div className="card ch1 mb-3">
                                <img className="card-img-top cit1 " src={p2} alt="Best Seller 2" />
                                <div className="card-body">
                                    <h5 className="card-title">Product 2</h5>
                                </div>
                            </div>
                            <div className="card ch1 mb-3">
                                <img className="card-img-top cit1" src={p3} alt="Best Seller 3" />
                                <div className="card-body">
                                    <h5 className="card-title">Product 3</h5>
                                </div>
                            </div>
                        </div>

                        {/* Best Discounts Section */}
                        <div className="col-md-4">
                            <h2>Best Discounts</h2>
                            <div className="card ch1 mb-3">
                                <img className="card-img-top cit1 cit1 " src={p1} alt="Discount 1" />
                                <div className="card-body">
                                    <h5 className="card-title">Discount 1</h5>
                                </div>
                            </div>
                            <div className="card ch1 mb-3">
                                <img className="card-img-top cit1 cit1" src={p2} alt="Discount 2" />
                                <div className="card-body">
                                    <h5 className="card-title">Discount 2</h5>
                                </div>
                            </div>
                            <div className="card ch1 mb-3">
                                <img className="card-img-top cit1" src={p3} alt="Discount 3" />
                                <div className="card-body">
                                    <h5 className="card-title">Discount 3</h5>
                                </div>
                            </div>
                        </div>

                        {/* User Reviews Section */}
                        <div className="col-md-4">
                            <h2>User Reviews</h2>
                            <div className="card ch1 mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">User 1</h5>
                                    <p className="card-text">This is a review from user 1.</p>
                                </div>
                            </div>
                            <div className="card ch1 mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">User 2</h5>
                                    <p className="card-text">This is a review from user 2.</p>
                                </div>
                            </div>
                            <div className="card ch1 mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">User 3</h5>
                                    <p className="card-text">This is a review from user 3.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <h1>This is Homepage</h1>
                    <button className="btn btn-outline-secondary" onClick={handleLoginClick}>Login</button>
                    <div id="carouselExampleIndicators" className="carousel slide my-5" data-ride="carousel" data-interval="3000">
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

                    <div className="row">
                        {/* Best Sellers Section */}
                        <div className="col-md-4">
                            <h2 >Best Sellers</h2>
                            <div className="card ch1 mb-3">
                                <img className="card-img-top cit1" src={p1} alt="Best Seller 1" />
                                <div className="card-body">
                                    <h5 className="card-title">Product 1</h5>
                                </div>
                            </div>
                            <div className="card ch1 mb-3">
                                <img className="card-img-top cit1" src={p2} alt="Best Seller 2" />
                                <div className="card-body">
                                    <h5 className="card-title">Product 2</h5>
                                </div>
                            </div>
                            <div className="card ch1 mb-3">
                                <img className="card-img-top cit1" src={p3} alt="Best Seller 3" />
                                <div className="card-body">
                                    <h5 className="card-title">Product 3</h5>
                                </div>
                            </div>
                        </div>

                        {/* Best Discounts Section */}
                        <div className="col-md-4">
                            <h2>Best Discounts</h2>
                            <div className="card ch1 mb-3">
                                <img className="card-img-top cit1" src={p1} alt="Discount 1" />
                                <div className="card-body">
                                    <h5 className="card-title">Discount 1</h5>
                                </div>
                            </div>
                            <div className="card ch1 mb-3">
                                <img className="card-img-top cit1" src={p2} alt="Discount 2" />
                                <div className="card-body">
                                    <h5 className="card-title">Discount 2</h5>
                                </div>
                            </div>
                            <div className="card ch1 mb-3">
                                <img className="card-img-top cit1" src={p3} alt="Discount 3" />
                                <div className="card-body">
                                    <h5 className="card-title">Discount 3</h5>
                                </div>
                            </div>
                        </div>

                        {/* User Reviews Section */}
                        <div className="col-md-4">
                            <h2>User Reviews</h2>
                            <div className="card ch1 mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">User 1</h5>
                                    <p className="card-text">This is a review from user 1.</p>
                                </div>
                            </div>
                            <div className="card ch1 mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">User 2</h5>
                                    <p className="card-text">This is a review from user 2.</p>
                                </div>
                            </div>
                            <div className="card ch1 mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">User 3</h5>
                                    <p className="card-text">This is a review from user 3.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

