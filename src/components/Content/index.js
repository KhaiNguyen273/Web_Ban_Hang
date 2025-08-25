import { Bannerslide } from './BannerSlide';
import { ProductList } from './ProductList';
import { SaleProducts } from './SaleProducts';
import { useContext } from 'react';
import { productsContext } from '~/context/ProductsContext';

const banner = [
    'https://theme.hstatic.net/1000344185/1001270599/14/slideshow_1.jpg?v=371',
    'https://theme.hstatic.net/1000344185/1001270599/14/slideshow_2.jpg?v=371',
];

const demoSaleProducts = [
    { id: 1, name: 'Áo thun nam', quantity: 10, price: 200000, salepercent: '100%' },
    { id: 2, name: 'Quần jean nữ', quantity: 5, price: 350000, salepercent: '25%' },
    { id: 3, name: 'Váy công sở', quantity: 7, price: 400000, salepercent: '15%' },
    { id: 4, name: 'Áo khoác lông', quantity: 3, price: 650000, salepercent: '30%' },
    { id: 5, name: 'Giày sneaker', quantity: 12, price: 900000, salepercent: '20%' },
    { id: 6, name: 'Túi xách nữ', quantity: 8, price: 750000, salepercent: '10%' },
    { id: 7, name: 'Đồng hồ nam', quantity: 4, price: 1200000, salepercent: '35%' },
    { id: 8, name: 'Mắt kính thời trang', quantity: 6, price: 320000, salepercent: '5%' },
    { id: 9, name: 'Áo sơ mi nam', quantity: 9, price: 270000, salepercent: '15%' },
    { id: 10, name: 'Giày thể thao nữ', quantity: 2, price: 850000, salepercent: '20%' },
    { id: 11, name: 'Thắt lưng da', quantity: 11, price: 180000, salepercent: '10%' },
    { id: 12, name: 'Nón bucket', quantity: 15, price: 150000, salepercent: '5%' },
    { id: 13, name: 'Áo hoodie', quantity: 6, price: 390000, salepercent: '20%' },
    { id: 14, name: 'Quần short', quantity: 7, price: 220000, salepercent: '15%' },
    { id: 15, name: 'Balo laptop', quantity: 5, price: 600000, salepercent: '25%' },
];

function MainContent() {
    const prodContext = useContext(productsContext);

    return (
        <div>
            <Bannerslide images={banner} />
            <ProductList products={prodContext.demoProducts} />
            <SaleProducts products={demoSaleProducts} />
        </div>
    );
}

export default MainContent;
