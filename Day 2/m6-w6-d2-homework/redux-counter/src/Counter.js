import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class Counter extends React.Component {

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    reset = () => {
        this.props.dispatch({ type: 'RESET' });
    }

    render() {
        return (
            <div className="container">
                <h2>Counter</h2>
                <div className="bg-info p-3">
                    <span className="border-span mr-3">{this.props.count}</span>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.reset}>reset</button>
                </div>
            </div>
        )
    }
}

// Add the mapStateToProps function:
function mapStateToProps(state) {
    return {
        count: state.count
    };
}

// export default Counter;

export default connect(mapStateToProps)(Counter);