import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
   render() {
      return (
         <span>{this.props.counter}</span>
      );
   }
}


// 'state' come from reducers/index.js
function sendStateWithProps(state) {
   return { counter: state.counterReducer };
}

// send mapStateToProps function to reducer
export default connect(sendStateWithProps)(Counter);