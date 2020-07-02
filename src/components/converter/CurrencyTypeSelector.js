import React from 'react';

class CurrencyTypeSelector extends React.Component {

    state = {selectedCurrencyType: ''}

    updateSelectedCurrencyType = (e) => {
        this.setState({selectedCurrencyType: e.target.value})
        this.props.selectCurrencyType(e.target.value)
    }

    render() {
        return(
            <form style={currencyTypeSelectorStyle}>
                <label for="currency" style={{marginRight:"7.5px"}}>Choose a currency  :</label>
                <select name="conversions" id="conversions" onChange={this.updateSelectedCurrencyType}>
                    {this.props.currencyRateTypes.map(rateType => <option value={rateType} key={rateType}>{rateType}</option>
                    )}
                </select> 
            </form>
        );
    };
};


const currencyTypeSelectorStyle = {
    display: 'flex',
    justifyContent: 'center',
}
export default CurrencyTypeSelector;