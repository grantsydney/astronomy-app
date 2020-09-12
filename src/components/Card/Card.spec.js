import React from 'react';
import { render } from '@testing-library/react'
import Card from '../Card/Card'

const props = {
  title: 'some title',
  date: 'some date',
  decrip: 'some description'
}


test('card renderes correctly', () => {
  const { getByText } = render(<Card {...props} />)
  expect(getByText('some title')).toBeTruthy()
})
