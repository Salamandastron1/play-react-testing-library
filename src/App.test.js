import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
    test('"How it works" link points to the correct page', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        const link = screen.getByRole('link', { name: /how it works/i })
        screen.debug(link)
    })


})