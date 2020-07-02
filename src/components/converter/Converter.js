import React from 'react';
import UserInput from './UserInput';
import ConvertedCurrencyDisplay from './ConvertedCurrencyDisplay';
import CurrencyTypeSelector from './CurrencyTypeSelector';

const Converter = (props) => {
    return (
        <div className="ui container">
            <h1 style={TitleStyle}>Select your currency to convert from USD</h1>
            <div className="currency-inputs" style={currencyInputStyles}>
                <UserInput updateUserInput={props.updateUserInput}/>
                <ConvertedCurrencyDisplay calculateConvertedValue={props.calculateConvertedValue}/>
            </div>
            <CurrencyTypeSelector currencyRateTypes={props.currencyRateTypes}
            selectCurrencyType={props.selectCurrencyType}/>
        </div>
    )
};


const TitleStyle ={
    textAlign: 'center',
    marginTop: '25px',
}

const currencyInputStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '100px 0px',
}

export default Converter;