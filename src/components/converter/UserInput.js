import React from 'react';

class UserInput extends React.Component {
    state = {value: null}

    valueToConvert = (e) => {
        this.setState({value: e.target.value})
        console.log(this.state.value)
        this.props.updateUserInput(e.target.value)
    }

    render() {
        return(
            <div className="ui right labeled input">
                <input type="text" placeholder="Enter your USD value" value={this.state.value} onChange={this.valueToConvert}/>
                <div className="ui basic label">
                    $
                </div>
            </div>
        );
    };
};

export default UserInput;