import React from 'react'
import { connect } from 'react-redux'
import { incrementCounter } from '../../redux/actions/index.js';
import Counter from '../pure/Counter.js';

const mapStateToProps = (state) => {
    return { 
        counter: state.count,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        addCount: () => {
            dispatch(incrementCounter())
        }
    }
}
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterContainer;