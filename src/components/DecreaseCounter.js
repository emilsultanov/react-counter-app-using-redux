import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decreaseCounter } from '../redux/actions/counterActions';
import { Button } from 'react-bootstrap';



class DecreaseCounter extends Component {
   render() {
      return (
         <Button variant="warning" onClick={(e) => this.props.dispatch(decreaseCounter())}>-1</Button>
      );
   }
}

function sendDispatchWithProps(dispatch) {
   return {
      actions: bindActionCreators(decreaseCounter, dispatch)
   }
}

export default connect(sendDispatchWithProps)(DecreaseCounter);