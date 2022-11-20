import { Provider } from 'react-redux';
import { RobotsList } from '../../../../features/robots/components/robots.list/robots.list';
import { useRobots } from '../../../../features/robots/hook/use.robots';
import { appStore } from '../../../store/store';

function Home() {
    const { robots } = useRobots();
    return (
        <Provider store={appStore}>
            <RobotsList item={robots}></RobotsList>
        </Provider>
    );
}

export default Home;
