export type ProtoRobot = {
    name?: string;
    img?: string;
    velocity?: number;
    force?: number;
    creation?: string;
};

export type Robot = {
    id: string;
    name: string;
    img: string;
    velocity: number;
    force: number;
    creation: string;
};

export class RobotModel {
    constructor(
        public name: string,
        public img: string,
        public velocity: number,
        public force: number,
        public creation: string
    ) {}
}
