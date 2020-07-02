import React from 'react';

const AboutUs = () => {
    return (
            <div className="about-us" style={AboutUsStyle} >
                <div style={AboutUsParagrahStyle}>
                    Currency Converter is an online web application that uses the exchangeratesapi to convert from USD to your desired currency. 
                    By using React for the framework, and React Routers for navigation, we are able to process your conversions and navigate around
                    the application at lightning fast speeds.
                </div>
            </div>
    );
};

const AboutUsStyle = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: "20px",
    lineHeight: '1.6',
}

const AboutUsParagrahStyle = {
    margin: '0 25%',
}

export default AboutUs;