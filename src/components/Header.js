import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="ui secondary pointing menu large">
            <Link to="/" className="item">Currency Converter</Link>
            <div className="right menu large">
                <Link to="/about-us" className="item">About Us</Link>
            </div>
        </div>
    );
};

export default Header;