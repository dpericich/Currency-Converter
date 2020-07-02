import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import exchangerates from '../apis/exchagerates';
import Header from './Header';
import AboutUs from './AboutUs';
import Converter from './converter/Converter';

class App extends React.Component{

    state = {currencyRates: {}, 
        selectedCurrencyType: '', 
        usdValue: null, 
        convertedValue: null}

    getAllCurrencyTypes = async() => {
        let KEY = 'enter your key here'
        let response = await exchangerates.get(`${KEY}/latest/USD`);
        this.setState({currencyRates: response.data.conversion_rates })
    }

    componentDidMount() {
        this.getAllCurrencyTypes();
    }

    selectCurrencyType = (type) => {
        this.setState({selectedCurrencyType: type})
    }

    updateUserInput = (value) => {
        this.setState({usdValue: value})
    }

    calculateConvertedValue = () => {
        return this.state.currencyRates[this.state.selectedCurrencyType] * this.state.usdValue;
    }

    render() {
        const currencyRateTypes = Object.keys(this.state.currencyRates);
        return (
            <BrowserRouter>
                <Header />
                <Route path='/' exact 
                    render={(props) => <Converter {...props} 
                    currencyRates={this.state.currencyRates} 
                    currencyRateTypes={currencyRateTypes}
                    selectCurrencyType={this.selectCurrencyType}
                    updateUserInput={this.updateUserInput}
                    calculateConvertedValue={this.calculateConvertedValue}
                    />}                    
                />
                <Route path='/about-us' component={AboutUs} />
            </BrowserRouter>
        );
    };
};

export default App;