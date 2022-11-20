import { FavoriteRobotsList } from '../../../../features/robots/components/favorites.robot.list/favorite.robots.list';
import { useRobots } from '../../../../features/robots/hook/use.robots';

function FavoritesPage() {
    const { robots } = useRobots();

    return (
        <main>
            <div>
                <FavoriteRobotsList item={robots}></FavoriteRobotsList>
            </div>
        </main>
    );
}

export default FavoritesPage;
