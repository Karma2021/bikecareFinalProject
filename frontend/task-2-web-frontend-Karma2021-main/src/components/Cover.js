import React from 'react'
import './css_files/cover.css'


function Cover() {
    return (
        <div>
            <main>
                <section className="wrapper">
                    {/* <h1><span className="change_content"></span></h1> */}
                    <h1>BOOK YOUR SERVICE</h1>

                    {/* <p>Discover top-notch services today!</p> */}
                    <a href="/services">Book Now</a>
                </section>
            </main>

        </div>
    )
}

export default Cover
