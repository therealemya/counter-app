import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Tests for our app', () =>{
    it('knows that 2 and 2 make 4', () =>{
        expect(2 + 2).toEqual(4);
    })
})
