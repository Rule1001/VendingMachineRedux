import React, { Component } from 'react';
import _ from 'lodash';
import Item from './Item';
import Keypad from './Keypad';

class StockItems extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column columns is-multiline">
          {_.map(this.props.stock, (code) => <Item key={code.name} itemName={code.name} itemPrice={code.price} itemUrl={code.url} />)}
        </div>
        <div className="column is-one-quarter">
          <Keypad stock={this.props.stock} />
        </div>
      </div>
    );
  }
}

export default StockItems;
