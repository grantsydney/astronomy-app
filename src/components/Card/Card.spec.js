import React from 'react';
import { render } from '@testing-library/react'
import Card from './Card'

const props = {
  title: 'some title',
  date: 'some date',
  descrip: 'some description',
  copyright: 'name'
}

describe('Card', () => {
    test('card renders with all props', () => {
        const { getByText } = render(<Card {...props} />)
        expect(getByText('some title')).toBeTruthy()
        expect(getByText('some date')).toBeTruthy()
        expect(getByText('some description')).toBeTruthy()
        expect(getByText('name')).toBeTruthy()
      })
    test('card renders without copyright prop', () => {
    const { getByText, queryByText } = render(<Card {...props} copyright={''} />)
    expect(getByText('some title')).toBeTruthy()
    expect(getByText('some date')).toBeTruthy()
    expect(getByText('some description')).toBeTruthy()
    expect(queryByText('name')).toBeFalsy()
      })
});