import { connect } from "react-redux";
import { incrementCounter } from "../../redux/actions";
import Counter from "../pure/Counter";

export const mapStateToProps = (state) => {
  return {
    counter: state.countState,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    incrementAction: (value) => {
      dispatch(incrementCounter(value));
    },
  };
};
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;
