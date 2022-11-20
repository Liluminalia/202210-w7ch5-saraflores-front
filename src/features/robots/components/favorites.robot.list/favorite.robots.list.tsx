import { Robot } from '../../types/robot';
import { FavoriteRobotItem } from '../favorites.robot.item/favorite.robot.item';

export function FavoriteRobotsList({ item }: { item: Robot[] }) {
    return (
        <>
            <h2>Robots List</h2>
            <ul>
                {item.map((item) => (
                    <li key={item.id}>
                        <FavoriteRobotItem item={item}></FavoriteRobotItem>
                    </li>
                ))}
            </ul>
        </>
    );
}
