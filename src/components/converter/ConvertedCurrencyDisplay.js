import React from 'react';

const ConvertedCurrencyDisplay = (props) => {

    return (
        <div className="ui right labeled input">
            <input type="text" placeholder="Amount in Currency" value={props.calculateConvertedValue() || "Amount in Currency"}/>
            <div className="ui basic label">
                $
            </div>
        </div>
    )
};

export default ConvertedCurrencyDisplay;