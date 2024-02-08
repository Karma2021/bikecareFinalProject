import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './css_files/footer.css';

function Footer() {
    return (
        <div>
            <footer className="main-footer">
                <div className="social-links">
                    <h1>Find Us On</h1>
                    <div className="social-icon">
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
                <div className="copyright">
                    <p>© BIKECARE-Online Bike Service. All rights reserved 2023.</p>
                </div>
            </footer>

            <div className="arrow">
                <a href="#" title="Back to Top"><span className="fas fa-angle-up"></span></a>
            </div>

        </div>
    )
}

export default Footer
