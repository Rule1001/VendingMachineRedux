import React from 'react';


class App extends React.Component {
  render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Amazing Vend
              </h1>
              <h2 className="subtitle"> surprisingly healthy snacks.....
            </h2>
            </div>
          </div>
        </section>
        <article className="message is-primary">
          <div className="message-body">
            <strong>display message</strong>.
        </div>
        </article>
        <div className="columns is-desktop">
          <div className="column is-2 notification is-info">stockItem 1</div>
          <div className="column is-2 notification is-info">stockItem 2</div>
          <div className="column is-2 notification is-info">stockItem 3</div>
          <div className="column is-2 notification is-info">stockItem 4</div>
          <div className="column is-2 notification is-success">keypad</div>
        </div>
        <div className="columns is-desktop">
          <div className="column is-2 notification is-info">stockItem 1</div>
          <div className="column is-2 notification is-info">stockItem 2</div>
          <div className="column is-2 notification is-info">stockItem 3</div>
          <div className="column is-2 notification is-info">stockItem 4</div>
          <div className="column is-auto"></div>
        </div>
        <div className="columns is-desktop">
          <div className="column is-2 notification is-info">stockItem 1</div>
          <div className="column is-2 notification is-info">stockItem 2</div>
          <div className="column is-2 notification is-info">stockItem 3</div>
          <div className="column is-2 notification is-info">stockItem 4</div>
          <div className="column is-auto"></div>
        </div>
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


export default App;

