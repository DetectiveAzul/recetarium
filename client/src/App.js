import React, { Component } from 'react';
import Recipe from './containers/Recipe.js';
import Request from './helpers/Request.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {
    const request = new Request('http://recetarium-api.herokuapp.com/api/recipes');
    request.get()
    .then(recipesData => this.setState({recipes: recipesData }) )
  };

  render() {
    return (
      <div className='App'>
        <Recipe recipes = {this.state.recipes} />
      </div>
    );
  };
};

export default App;
