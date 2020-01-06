import React from 'react'
// import ReactDOM from 'react-dom'
// import {getQueriesForElement} from '@testing-library/dom'
import {render} from '@testing-library/react'
import {FavoriteNumber} from '../favorite-number'

// create a custom render
/*
function render(ui) {
  const container = document.createElement('div')
  ReactDOM.render(ui, container)
  const queries = getQueriesForElement(container)
  return { container, ...queries }
}
*/

test('renders a number input with a label "Favorite Number"', () => {
  const {getByLabelText} = render(<FavoriteNumber />)
  // get input by label value
  const input = getByLabelText(/favorite number/i)
  // check if the input is a number
  expect(input).toHaveAttribute('type', 'number')
})
