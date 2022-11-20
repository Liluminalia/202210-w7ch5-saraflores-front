import { Layout } from './layout';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given Layout component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Sara Flores"', () => {
            render(
                <Router>
                    <Layout>
                        <p>Sara Flores</p>
                    </Layout>
                </Router>
            );
            const element = screen.getByText(/Sara Flores/i);
            expect(element).toBeInTheDocument();
        });
    });
});
