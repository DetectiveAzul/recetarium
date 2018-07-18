import React, { Component } from 'react';
import Request from './helpers/request.js';

class App extends Component {
  render() {
    //Test connection with API is working
    // const request = new Request('http://localhost:8080/api/recipes');
    // request.get()
    //   .then((recipes) => {
    //     console.log(recipes)
    //   });

    //Returning the content from the API
    return (
      <div className='content'>
      </div>
    );
  }
}

export default App;
