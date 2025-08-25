import { ProductInforContent } from '~/components/ProductInforContent';
import { useContext } from 'react';
import { productsContext } from '~/context/ProductsContext';
import { useParams } from 'react-router-dom';

function ProductInfo() {
    const prodContext = useContext(productsContext);
    const { id } = useParams();
    return <ProductInforContent products={prodContext.demoProducts} id={id} />;
}

export default ProductInfo;
