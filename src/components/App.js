import React, { Component } from 'react'
import Recipe from './Recipe'
import Navbar from './Navbar'
import RecipeList from './RecipeList'

import '../styles/App.scss'

class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <RecipeList />
        {/* <Recipe
          title='Pasta'
          ingredients={['flour', 'water']}
          instructions='Mix Ingredients'
          // img='http://www.simplyrecipes.com/wp-content/uploads/2006/09/italian-sausage-spaghetti-horiz-640.jpg'
          img='spaghetti.jpg'
        /> */}
      </div>
    )
  }
}

export default App
