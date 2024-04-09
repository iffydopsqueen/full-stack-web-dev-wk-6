import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <span>{this.props.count}</span>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
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