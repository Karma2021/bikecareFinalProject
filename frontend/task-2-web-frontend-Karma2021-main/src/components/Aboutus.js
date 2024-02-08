import React from 'react';
import aboutus from '../assets/images/aboutuss.png';
import karma from '../assets/images/p2.jpg';
import './css_files/aboutus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Aboutus() {
    return (
        <div>
            <div className="banner">
                <h1>About Us</h1>
                <h2>Know More About Us</h2>
            </div>
            {/* About Part */}
            <div className="about">
                <div className="img">
                    <img src={aboutus} alt="About Us" />
                </div>
                <div className="para">
                    <h1>BIKECARE</h1>
                    <h2>Online Service Booking</h2>
                    <p>
                        Welcome to BikeCare, your go-to destination for professional and reliable online bike servicing.
                        <br />
                        <br />
                        At BikeCare, we are passionate about keeping your bikes in top-notch condition, ensuring smooth and safe rides on every journey.
                        <br />
                        <br />
                        With years of experience and a team of skilled mechanics, we are committed to providing exceptional bike maintenance services right at your fingertips.
                    </p>
                </div>
            </div>
            {/* contributor  */}
            <div className="team-section">
                <h1>CONTRIBUTOR</h1>
                <div className="wrappers">
                    <div className="team-box">
                        <div className="ps">
                            <a href="#p2"><img src={karma} alt="avater" /></a>
                        </div>
                        <div className="section" id="p2">
                            <p className="name">Karma Palsang Lama</p>
                            <p className="border"></p>
                            <p className="rank">Founder / Developer</p>
                            <div className="social">
                                <i>
                                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                                </i>
                                <i>
                                    <FontAwesomeIcon icon="fa-brands fa-facebook" />
                                </i>
                                <i>
                                    <FontAwesomeIcon icon="fa-brands fa-youtube" />
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Aboutus;
