import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import DisplayMessage from './DisplayMessage';
import StockItems from './StockItems'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <DisplayMessage />
        <StockItems stock={this.props.stock} />

        <div className="tile is-parent">
          <div className="tile is-8 notification is-danger">
            <p className="title">Take your snack......</p>

          </div>
          <div className="tile is-2 notification is-warning">
            <p className="title">change dispenser</p>


          </div>

        </div>


      </div>



    );
  }
}

function mapStateToProps(state) {
  return {
    stock: state.stock
  }
}


export default connect(mapStateToProps)(App)

