import { Robot } from '../types/robot';
import { Repository } from './repository';

export class RobotRepository implements Repository<Robot> {
    url: string;
    constructor(url = '') {
        this.url = 'https://w7ch5sarafloresserver.onrender.com/robots';
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    getAll(): Promise<Array<Robot>> {
        return fetch(this.url)
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .then((data) => {
                return data.robots;
            })
            .catch((error) => {
                return `${error}`;
            });
    }

    create(robot: Partial<Robot>): Promise<Robot> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(robot),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }

    delete(id: string): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) throw this.createError(response);
            })
            .catch((error) => {
                return `${error}` as unknown as void;
            });
    }

    update(partialRobot: Partial<Robot>): Promise<Robot> {
        return fetch(`${this.url}/${partialRobot.id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialRobot),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }
}
