import React from 'react'
import { render } from '@testing-library/react'
import Container from './Container'


const mockData = {
        title: "some title..",
        date: "09-12-2020",
        explanation: "aaaa lllooonnnggg dddeeesssccrriippttiioonn"
};

const mockFetch = (mockData) => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
};


mockFetch(mockData);

describe('Container', () => {
    test('show loading message', () => {
        const { getByText } = render(<Container />);
        expect(getByText('Loading...')).toBeTruthy()
    });
});

