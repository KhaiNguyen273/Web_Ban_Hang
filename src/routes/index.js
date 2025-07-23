import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import Cart from '~/pages/Cart';
import Flashsale from '~/pages/Flashsale';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/cart', component: Cart },
    { path: '/flashsale', component: Flashsale, layout: HeaderOnly },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
