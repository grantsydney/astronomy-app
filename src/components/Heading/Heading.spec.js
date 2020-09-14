import React from 'react';
import { render } from '@testing-library/react'
import Heading from './Heading'


describe('Heading', () => {
    test('Heading renders with all props', () => {
        const { getByText } = render(<Heading header={'title'} />)
        expect(getByText('title')).toBeTruthy()
    })
    test('Heading renders with deafult prop', () => {
        const { getByText } = render(<Heading />)
        expect(getByText('Astronomy Picture of the Day')).toBeTruthy()
    })
});