import React, { Component } from 'react';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className='app'>
        {
          this.props.stickers.map(sticker => {
            return (
              <div className='sticker' key={sticker._id}>
                  <img src={sticker.imageUrl}/>
                  <div>Category: {sticker.category}</div>
              </div>
            )
          }) 
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  // const stickers = state.store.stickers;
  const { stickers } = state.store;
  return { 
    stickers
  }
}

App = connect(mapStateToProps)(App);

export default App;