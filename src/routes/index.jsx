import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import Uploads from '../pages/Uploads';
import { HeaderOnly } from '../components/Layout';
import NotFound from '../pages/NotFound';
// Public Routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Uploads,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
    {
        path: '*',
        component: NotFound,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
