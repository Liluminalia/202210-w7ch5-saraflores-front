import { renderHook, waitFor } from '@testing-library/react';
import { useRobots } from './use.robots';
import { Robot, ProtoRobot } from '../types/robot';
import { RobotRepository } from '../services/robot.repository';
import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store';

jest.mock('../services/robot.repository');

const mock1 = {
    force: 5,
};
const mock2 = {
    id: 'string',
    name: 'string',
    img: 'string',
    velocity: 9,
    force: 9,
    creation: 'string',
};

describe('Given the hook', () => {
    let result: {
        current: {
            robots: Array<Robot>;
            handleAdd: (newRobot: ProtoRobot) => void;
            handleDelete: (robot: Robot) => void;
            handleUpdate: (updateRobot: Partial<Robot>) => void;
        };
    };

    beforeEach(() => {
        RobotRepository.prototype.getAll = jest.fn().mockResolvedValue([mock2]);
        RobotRepository.prototype.create = jest.fn().mockResolvedValue(mock2);
        RobotRepository.prototype.delete = jest.fn().mockResolvedValue(mock2);
        RobotRepository.prototype.update = jest.fn().mockResolvedValue(mock1);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        // eslint-disable-next-line testing-library/no-render-in-setup
        ({ result } = renderHook(() => useRobots(), { wrapper }));
    });

    test('if we use HandleAdd should add a new item to the array of robots', async () => {
        await waitFor(() => {
            result.current.handleAdd(mock2);
            expect(result.current.robots.at(-1)).toEqual(mock2);
        });
    });
    test('if we use HandleUpdate should change an item from the array of robots', async () => {
        await waitFor(() => {
            result.current.handleUpdate(mock1);
            expect(result.current.robots).toContain(mock2);
        });
    });
    test('if we use HandleDelete should delete an item from the array of robots', async () => {
        await waitFor(() => {
            result.current.handleDelete(mock2);
            expect(result.current.robots).toEqual([]);
        });
    });
});
