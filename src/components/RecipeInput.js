import React, { Component } from 'react'
import '../styles/RecipeInput.scss'

class RecipeInput extends Component {
  static defaultProps = {
    onClose () {}
  }
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      instructions: '',
      ingredients: [''],
      img: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleNewIngredient = this.handleNewIngredient.bind(this)
    this.handleChangeIng = this.handleChangeIng.bind(this)
  }

  handleChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleNewIngredient (e) {
    const {ingredients} = this.state
    this.setState({ingredients: [...ingredients, '']})
  }

  handleChangeIng (e) {
    const index = Number(e.target.name.split('-')[1])
    const ingredients = this.state.ingredients.map((ing, i) => (
      i === index ? e.target.value : ing
    ))
    this.setState({ingredients})
  }

  render () {
    const {title, instructions, img, ingredients} = this.state
    const {onClose} = this.props
    let inputs = ingredients.map((ing, i) => (
      <div className='recipe-form-line'
        key={`ingredient-${i}`}
      >
        <label>{i + 1}.
          <input type='text'
            name={`ingredient-${i}`}
            value={ing}
            size={45}
            autoComplete='off'
            placeholder='Ingredient'
            onChange={this.handleChangeIng}
          />
        </label>
      </div>
    ))
    return (
      <div className='recipe-form-container'>
        <form className='recipe-form' onSubmit={this.handleSubmit}>
          <button
            type='button'
            className='close-button'
            onClick={onClose}
          >
            X
          </button>
          <div className='recipe-form-line'>
            <label htmlFor='recipe-title-input'>Title</label>
            <input
              id='recipe-title-input'
              key='title'
              name='title'
              type='text'
              value={title}
              size={42}
              autoComplete='off'
              onChange={this.handleChange}
            />
          </div>
          <label htmlFor='recipe-instructions-input'
            style={{marginTop: '5'}}
          >
              instructions
          </label>
          <textarea
            key='instructions'
            type='instructions'
            name='instructions'
            id='recipe-instructions-input'
            cols='50'
            rows='8'
            autoComplete='off'
            value={instructions}
            onChange={this.handleChange}
          />
          {inputs}
          <button
            type='button'
            onClick={this.handleNewIngredient}
            className='buttons'
          >
            +
          </button>
          <div className='recipe-form-line'>
            <label htmlFor='recipe-image-input'>Image URL</label>
            <input
              type='text'
              id='recipe-img-input'
              placeholder=''
              name='img'
              value={img}
              size={36}
              autoComplete='off'
              onChange={this.handleChange}
            />
          </div>
          <button
            type='submit'
            className='buttons'
            style={{alignSelf: 'flex-end', marginRight: 0}}
          >
            SAVE
          </button>
        </form>

      </div>
    )
  }
}
export default RecipeInput
