import React from "react";
import {render, fireEvent} from '@testing-library/react';
import SearchUser from './components/SearchUser';


// TEST INPUT RENDER
it('renders correctly', () => {
  const {queryByPlaceholderText} = render(<SearchUser />)

  expect(queryByPlaceholderText('Search for a user')).toBeTruthy()
})

// TEST INPUT CHANGE
describe('Input value', () => {
  it('updates on change', () => {
    const {queryByPlaceholderText} = render(<SearchUser />)

    const searchInput = queryByPlaceholderText('Search for a user');

    fireEvent.change(searchInput, {target: {value: 'test'}})

    expect(searchInput.value).toBe('test')
  })
})
