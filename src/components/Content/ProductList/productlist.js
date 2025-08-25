import { useContext, useState } from 'react';
import styles from './ProductList.module.scss';
import classNames from 'classnames/bind';
import { Pagination } from '~/components/Content/Pagination';
import { numberProdContext } from '~/context/NumberProdContext';
import { showHeaderContext, ShowHeaderProvider } from '~/context/ShowHeaderContext';
import Product from '../Product/product';

const cx = classNames.bind(styles);
function ProductList({ products = [] }) {
    const [currentPage, setcurrentPage] = useState(1);
    const productsPerPage = 8;
    const totalPages = Math.ceil(products.length / productsPerPage);
    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = products.slice(indexOfFirst, indexOfLast);

    const numProdContext = useContext(numberProdContext);
    const showHeadContext = useContext(showHeaderContext);
    return (
        <div className={cx('container')}>
            <div className={cx('inner')}>
                <div className={cx('title')}>
                    <h2>ALL MY PRODUCT</h2>
                </div>
                <div className={cx('wrapper')}>
                    {currentProducts.map((product, index) => {
                        return (
                            <Product
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                quantity={product.quantity}
                                price={product.price}
                                main_imgs={product.main_imgs}
                                hover_imgs={product.hover_imgs}
                                handleNumProd={numProdContext.handleNumProd}
                                setShowHeader={showHeadContext.setShowHeader}
                            ></Product>
                        );
                    })}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page) => setcurrentPage(page)}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductList;
