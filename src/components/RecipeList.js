import React, {Component} from 'react'
import Recipe from './Recipe'
import PropTypes from 'prop-types'

import '../styles/Recipelist.scss'

export default class RecipeList extends Component {
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render () {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={r.id} {...r} />
    ))

    return (
      <div className='recipe-list'>
        {recipes}
      </div>
    )
  }
}
