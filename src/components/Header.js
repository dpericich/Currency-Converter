import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Converter</Link>
            <div className="right menu">
                <Link to="/about-us" className="item">About Us</Link>
            </div>
        </div>
    );
};

export default Header;