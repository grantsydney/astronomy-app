import React from 'react'
import { render } from '@testing-library/react'
import Container from '../Container/Container'


const mockData = {
        title: "Joni Baez",
        date: "32",
        explanation: "123, Charming Avenue"
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

