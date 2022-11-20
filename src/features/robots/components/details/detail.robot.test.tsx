import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { RobotDetails } from './detail.robot';

describe('Given details component', () => {
    describe('When we render the component', () => {
        test('Then it should display "velocidad"', () => {
            render(
                <>
                    <Router>
                        <RobotDetails />
                    </Router>
                </>
            );
            const element = screen.getByText(/velocidad/i);
            expect(element).toBeInTheDocument();
        });
    });
});
