import React from 'react'
import './css_files/album.css';
import first from '../assets/images/1.jpg';
import second from '../assets/images/2.jpg';
import third from '../assets/images/3.jpg';
import fourth from '../assets/images/about.jpg';

function Album() {
    return (
        <div>
            <section className="photo">
                <h1>PHOTO GALLERY</h1>
                <div className="gallery">
                    <div className="img">
                        <img src={first} alt="1" />
                    </div>
                    <div className="img">
                        <img src={second} alt="2" />
                    </div>
                    <div className="img">
                        <img src={third} alt="3" />
                    </div>
                    <div className="img">
                        <img src={fourth} alt="4" />
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Album
