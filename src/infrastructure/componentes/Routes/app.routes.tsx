import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="Home">
                <Route index element={<Home></Home>}></Route>
            </Route>
            <Route path="" element={<Home></Home>}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
            <Route path="*" element={<h1>No se encontró la ruta</h1>}></Route>
        </Routes>
    );
}
