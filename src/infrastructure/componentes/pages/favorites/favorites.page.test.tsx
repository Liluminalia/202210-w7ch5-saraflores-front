import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import FavoritesPage from './favorites.page';

describe('Given Favorites page', () => {
    describe('When we render the page', () => {
        test('Then it should display the list of our favorites robots', () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <FavoritesPage />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/Robots List/i);
            expect(element).toBeInTheDocument();
        });
    });
});
