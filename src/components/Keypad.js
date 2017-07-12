import React, { Component } from 'react';
import Key from './Key';
import _ from 'lodash';

class Keypad extends Component {
    render() {
        return (
            <div className="columns">
                <div className="column columns is-multiline">

                    
                    {_.map(this.props.stock, (code) => <Key key={code.name} itemCode={code.code} quantity={code.quantity} />)}
                </div>
            </div>
        );
    }

}


export default Keypad;