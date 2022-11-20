import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import FavoritesPage from './favorites.page';

describe('Given Favorites page', () => {
    describe('When we render the page', () => {
        test('Then it should display the list of our favorites robots', () => {
            render(
                <>
                    <Router>
                        <FavoritesPage />
                    </Router>
                </>
            );
            const element = screen.getByText(/sdfsdfsdf/i);
            expect(element).toBeInTheDocument();
        });
    });
});
