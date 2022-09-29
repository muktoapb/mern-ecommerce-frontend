import React from 'react';
import './Head.css'

const Head = () => {
    return (
        <>
            <div className="header-top">
                <div className="container d-flex">
                    <div className="contact">
                        <a href="#">Contact</a>
                        <a href="#">Support</a>
                    </div>
                    <div className="login"></div>
                </div>
            </div>
        </>
    );
};

export default Head;