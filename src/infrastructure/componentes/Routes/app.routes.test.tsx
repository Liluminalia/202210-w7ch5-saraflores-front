import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../store/store';
import { AppRoutes } from './app.routes';

describe('Given AppRoutes component', () => {
    describe('When we render the component And the route is home', () => {
        render(
            <>
                <Router initialEntries={['/', '/home']} initialIndex={0}>
                    <Provider store={appStore}>
                        <AppRoutes />
                    </Provider>
                </Router>
            </>
        );
        test('Then it should display the HomePage', () => {
            const element = screen.getByText(/Robots List/i);
            expect(element).toBeInTheDocument();
        });
    });
});
