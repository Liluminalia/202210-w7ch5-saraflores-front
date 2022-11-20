import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { ProtoRobot, Robot } from '../types/robot';
import * as ac from '../reducer/action.creators';
import { RobotRepository } from '../services/robot.repository';

export const useRobots = () => {
    const robots = useSelector((state: rootState) => state.robots);
    const dispatcher = useDispatch();
    const repositoryRobot = useMemo(() => new RobotRepository(), []);

    useEffect(() => {
        repositoryRobot
            .getAll()
            .then((robots) => dispatcher(ac.loadActionCreator(robots)));
    }, [repositoryRobot, dispatcher]);

    const handleAdd = (newRobot: ProtoRobot) => {
        repositoryRobot
            .create(newRobot)
            .then((robot: Robot) => dispatcher(ac.addActionCreator(robot)));
    };

    const handleUpdate = (updateRobot: Partial<Robot>) => {
        repositoryRobot
            .update(updateRobot)
            .then((robot: Robot) => dispatcher(ac.updateActionCreator(robot)));
    };

    const handleDelete = (robot: Robot) => {
        repositoryRobot
            .delete(robot.id)
            .then(() => dispatcher(ac.deleteActionCreator(robot)));
    };

    return {
        robots,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
