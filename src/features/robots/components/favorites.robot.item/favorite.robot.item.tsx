import { Link } from 'react-router-dom';
import { Robot } from '../../types/robot';

export function FavoriteRobotItem({ item }: { item: Robot }) {
    return (
        <>
            <div>
                <h3>{item.name}</h3>
                <Link to={'/Details/' + item.id} key={item.id}>
                    <img
                        src={item.img}
                        alt="imagen de un robot dibujado"
                        height="300"
                    />
                </Link>
            </div>
        </>
    );
}
