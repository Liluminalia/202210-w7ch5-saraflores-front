import React from 'react';
import { Robot } from '../../types/robot';
import { RobotItem } from '../robot.item/robot.item';

export function RobotsList({ item }: { item: Robot[] }) {
    return (
        <>
            <h2>Robots List</h2>
            <ul>
                {item.map((item) => (
                    <li key={item.id}>
                        <RobotItem item={item}></RobotItem>
                    </li>
                ))}
            </ul>
        </>
    );
}
