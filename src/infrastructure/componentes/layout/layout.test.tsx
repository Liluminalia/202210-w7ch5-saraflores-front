import { Layout } from './layout';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given Layout component', () => {
    describe('When we render the component', () => {
        test('Then it should display "froilan"', () => {
            render(
                <Router>
                    <Layout>
                        <p>froilan</p>
                    </Layout>
                </Router>
            );
            const element = screen.getByText(/froilan/i);
            expect(element).toBeInTheDocument();
        });
    });
});
