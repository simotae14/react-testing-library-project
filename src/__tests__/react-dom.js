import React from 'react'
import ReactDOM from 'react-dom'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)
  // check if the input is a number
  expect(div.querySelector('input')).toHaveAttribute('type', 'number')
  // check if the label is Favorite Number
  expect(div.querySelector('label')).toHaveTextContent('Favorite Number')
})
