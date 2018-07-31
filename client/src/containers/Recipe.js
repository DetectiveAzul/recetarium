import React, { Component } from 'react';

class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRecipe: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(event) {
    event.preventDefault();
    const index = event.target.recipeIndex.value
    console.log('Submitted!', index);
    console.log('Recipe selected:', this.props.recipes[index]);
  };


  render() {
    return(
      <div className='Recipe'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='recipeIndex' />
          <input type='submit' value='Search' />
        </form>
      </div>
    );
  };



}

export default Recipe;
