import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseByTwoCounter } from '../redux/actions/counterActions';
import { Button } from 'react-bootstrap';

class IncreaseByTwoCounter extends Component {
   render() {
      return (
         <Button variant="danger" onClick={(e) => this.props.dispatch(increaseByTwoCounter())}>+2</Button>
      );
   }
}

function sendDispatchWithProps(dispatch) {
   return {
      actions: bindActionCreators(increaseByTwoCounter, dispatch)
   }
}

export default connect(sendDispatchWithProps)(IncreaseByTwoCounter);