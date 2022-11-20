import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Robot } from '../../types/robot';

export function RobotDetails() {
    const initialRobot: Robot = {
        id: '0',
        name: '',
        img: '',
        velocity: 0,
        force: 0,
        creation: '',
    };
    const [robot, setRobot] = useState(initialRobot);
    const { id } = useParams();
    const getRobotsById = async (id: string | undefined) => {
        const data = await fetch(
            `https://w7ch5sarafloresserver.onrender.com/robots/${id}`
        );
        const robot = await data.json();
        setRobot(robot[0]);
    };

    useEffect(() => {
        getRobotsById(id);
    }, [id]);

    return (
        <div>
            <h1>
                {robot.name} + {robot.creation}
            </h1>
            <div>
                <img
                    src={robot.img}
                    alt="imagen de un robot dibujado"
                    width="600"
                />
            </div>
            <div>
                <p>Velocidad: {robot.velocity}</p>
                <p>Fuerza: {robot.force}</p>
            </div>
        </div>
    );
}
