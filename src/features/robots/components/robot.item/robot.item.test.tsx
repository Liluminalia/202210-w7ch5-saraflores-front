import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { useRobots } from '../../hook/use.robots';
import { appStore } from '../../../../infrastructure/store/store';
import { Robot } from '../../types/robot';
import { RobotItem } from './robot.item';
import React from 'react';

jest.mock('../../hook/use.robots');

describe('Given RobotItem component', () => {
    describe('When we render the component', () => {
        test('Then it should display the brand of a Robot', () => {
            const mockRobot: Robot = {
                id: 'string',
                name: 'string',
                img: 'string',
                velocity: 3,
                force: 5,
                creation: 'string',
            };
            (useRobots as jest.Mock).mockReturnValue({
                robots: [mockRobot],
            });

            render(
                <Router>
                    <Provider store={appStore} children={undefined}>
                        <RobotItem item={mockRobot} />
                    </Provider>
                </Router>
            );
            const element = screen.getByAltText('imagen de un robot dibujado');
            expect(element).toBeInTheDocument();
        });
    });
});
