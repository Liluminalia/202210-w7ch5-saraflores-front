import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../infrastructure/store/store';
import { Robot } from '../../types/robot';
import { RobotsList } from './robots.list';

describe('Given RobotsList component', () => {
    describe('When we render the component', () => {
        test('Then it should display Robots List', () => {
            const mockList: Robot[] = [
                {
                    id: 'string',
                    name: 'string',
                    img: 'string',
                    velocity: 9,
                    force: 9,
                    creation: 'string',
                },
            ];
            render(
                <Router>
                    <Provider store={appStore} children={undefined}>
                        <RobotsList item={mockList} />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/Robots List/i);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display the name of any in the list', () => {
            const mockList: Robot[] = [
                {
                    id: 'strsding',
                    name: 'strasding',
                    img: 'strasding',
                    velocity: 6,
                    force: 3,
                    creation: 'strasing',
                },
            ];

            render(
                <Router>
                    <Provider store={appStore} children={undefined}>
                        <RobotsList item={mockList} />
                    </Provider>
                </Router>
            );
            const element = screen.getByAltText(/strasding/i);
            expect(element).toBeInTheDocument();
        });
    });
});
