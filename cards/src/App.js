import React, { Component } from 'react';
import Cards from './Cards';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <h1>MARVEL'S</h1>
        <div className="App">
          < Cards
            title='IRON MAN 3'
            imgurl='https://images8.alphacoders.com/378/thumb-1920-378546.jpg'
            body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt aperiam,
          ,olor sit amet consectetu  officia.'
          />
          <Cards
            title='CAPTAIN AMERICA'
            imgurl='https://cdn.europosters.eu/image/1300/posters/captain-america-civil-war-captain-america-i30250.jpg'
            body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt aperiam,
          ,olor sit amet consectetu  officia.'
          />
          <Cards
            title='THOR'
            imgurl='https://cdn.europosters.eu/image/750/posters/thor-the-dark-world-teaser-i15068.jpg'
            body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt aperiam,
          ,olor sit amet consectetu  officia.'
          />


        </div>

      </>


    );
  }
}

export default App;
