import { RobotModel } from '../types/robot';
import { RobotRepository } from './robot.repository';

describe('Given RobotRepository Service', () => {
    describe('When we instantiate it', () => {
        let service: RobotRepository;
        beforeEach(() => {
            service = new RobotRepository();
        });
        test('Then if i use service.error(), it should return an error', () => {
            const error = service.createError(
                new Response('Error', {
                    status: 400,
                    statusText: 'error',
                })
            );
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(error).toEqual(result);
        });
        test(`Then if I use service.getAll() 
            it should return a Promise of an Array of robots`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({ robots: [] }),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test(`Then when something is not ok, if I use service.getAll() it should throw an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.getAll();
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });
        test(`Then if I use service.create()
                it should return a Promise of the created robot`, async () => {
            const mockRobot = new RobotModel('', '', 0, 9, '');
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockRobot),
            });
            const result = await service.create(mockRobot);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockRobot);
        });
        test(`Then when something is not ok, if I use service.create() it should throw an error`, async () => {
            const mockRobot = new RobotModel('', '', 0, 4, '');

            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.create(mockRobot);
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });

        test('Then if I use service.delete() it should return a Promise of an Array of robots', async () => {
            const robotMock = {
                id: '2',
                name: 'string',
                img: 'string',
                velocity: 4,
                force: 3,
                creation: 'string',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(robotMock),
            });
            const result = await service.delete(robotMock.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });
        test(`Then when something is not ok, if I use service.delete() it should throw an error`, async () => {
            const robotMock = {
                id: '2',
                name: 'string',
                img: 'string',
                velocity: 4,
                force: 3,
                creation: 'string',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.delete(robotMock.id);
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });

        test('Then if I use service.update() it should return a Promise of an Array of robots', async () => {
            const robotMock = new RobotModel('', '', 0, 7, '');
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([robotMock]),
            });
            const result = await service.update({ velocity: 5 });
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([robotMock]);
        });
        test(`Then when something is not ok, if I use service.update() it should throw an error`, async () => {
            const partialMock = {
                velocity: 4,
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });
            const expectedResult = await service.update(partialMock);
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });
    });
});
