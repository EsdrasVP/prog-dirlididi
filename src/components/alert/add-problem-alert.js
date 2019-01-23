import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class AddProblemAlert extends Component {
  render() {
    if (this.props.showAlert) {
      return(
        <div>
          <Alert bsStyle='success'>Problem Submited!</Alert>
        </div>
      );
    }

    return(
      <div/>
    );
  }
}

export default AddProblemAlert;
