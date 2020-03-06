import React, { Component } from 'react';
import { connect } from 'react-redux'; // connect component to redux
import { bindActionCreators } from 'redux';
import { increaseCounter } from '../redux/actions/counterActions';
import { Button } from 'react-bootstrap';

class IncreaseCounter extends Component {
   render() {
      return (
         <Button className='mx-3' variant="success" onClick={(event) => this.props.dispatch(increaseCounter())}>+1</Button>
      );
   }
}

function sendDispatchWithProps(dispatch) {
   return {
      actions: bindActionCreators(increaseCounter, dispatch)
   }
}

export default connect(sendDispatchWithProps)(IncreaseCounter);

