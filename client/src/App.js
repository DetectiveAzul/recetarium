import React, { Component } from 'react';
import RequestTest from './containers/RequestTest.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    const url = 'http://recetarium-api.herokuapp.com/api/recipes';
    fetch(url)
    .then(res =>  res.json() )
    .then(recipesData => this.setState({recipes: recipesData }))
    .catch(error => console.log('Error:', error));
  };

  render() {
    return (
      <div className='App'>
        <RequestTest recipes= {this.state.recipes} />
      </div>
    );
  }
}

export default App;
