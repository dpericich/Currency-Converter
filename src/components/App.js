import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import exchangerates from '../apis/exchagerates';
import Header from './Header';
import AboutUs from './AboutUs';
import Converter from './Converter';

class App extends React.Component{

    state = {currencyTypes: [],}

    getAllCurrencyTypes = async() => {
        let response = await exchangerates.get('latest');
        this.setState({currencyTypes: response.data.rates})
    }

    componentDidMount() {
        this.getAllCurrencyTypes();
        console.log(this.state.currencyTypes)
    }

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Route path='/' exact component={Converter} />
                <Route path='/about-us' component={AboutUs} />
            </BrowserRouter>
        );
    };
};

export default App;