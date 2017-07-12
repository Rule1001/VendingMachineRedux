import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

class Key extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div className="column is-one-quarter notification is-warning">
        <button
          onClick={this.props.releaseSnack.bind(null, this.props.itemCode)}>
          {this.props.itemCode}
        </button>
      </div>
    );
  }
  handleChange(event) {
    console.log(this.props.itemCode)
  
  }
}

function mapDispatchToProps (dispatch) {
  return {
    releaseSnack: (itemCode) => {
      dispatch(actions.releaseSnackAndChange(itemCode));
    }
  };
}


export default connect(null, mapDispatchToProps)(Key);
