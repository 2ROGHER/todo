import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCounter } from '../../redux/actions';

export class CounterClass extends Component {
    componentDidMount(){
        console.log(this.props);
        const { count } = this.props.counter;
    }
  render() {
    return (
      <>
        <div>CounterClass {this.props.counter.count}</div>
        <button onClick={() => this.props.incrementCounter(-1)}>increment</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
    return { 
        counter: state.countState
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter: (value) => { dispatch(incrementCounter(value))},
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass)