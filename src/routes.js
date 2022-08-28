import { useRoutes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";


export default function Router() {
    return useRoutes(
        [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    );
}