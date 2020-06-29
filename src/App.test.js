import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
    test.each([
        ["About", /about/i],
        ["How it works", /how it works/i]
    ])('"%s"link points to the correct page', (a, b) => {
        console.log(b)
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        const link = screen.getByRole('link', { name: b })
        screen.debug(link)
        userEvent.click(link)

        expect(
            screen.getByRole('heading', { name: b })
        ).toBeInTheDocument()
    })
    test('"Home page" link redirects to home', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        const link = screen.getByRole('link', { name: /how it works/i })
        userEvent.click(link)
        const h1 = screen.getByRole('heading', { name: /how it works/i })
        const homeLink = screen.getByRole('link', { name: /logo.svg/i })
        screen.debug(homeLink)
    })
})