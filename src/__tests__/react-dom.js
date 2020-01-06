import React from 'react'
import ReactDOM from 'react-dom'
import {getQueriesForElement} from '@testing-library/dom'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)
  const {getByLabelText} = getQueriesForElement(div)
  // get input by label value
  const input = getByLabelText(/favorite number/i)
  // check if the input is a number
  expect(input).toHaveAttribute('type', 'number')
})
