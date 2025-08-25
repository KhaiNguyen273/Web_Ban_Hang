import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import Cart from '~/pages/Cart';
import Flashsale from '~/pages/Flashsale';
import ProductInfo from '~/pages/ProductInfo';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/sale', component: Contact },
    { path: '/cart', component: Cart },
    { path: '/men', component: Flashsale },
    { path: '/product_info/:id', component: ProductInfo },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
