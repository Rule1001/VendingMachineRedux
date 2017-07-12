import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

class Item extends Component {
  render() {
    console.log(this.props.stock)
    return (
          <div className="column is-one-quarter notification is-info">
          <p>{this.props.itemName}</p>
          <p>{this.props.itemPrice}</p>
          <img src={this.props.itemUrl} alt={this.props.itemName} width="200" height="150" />
          </div>


    )
  }
}


export default Item;
