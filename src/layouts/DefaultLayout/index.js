import Header from '~/components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { NumProdProvider } from '~/context/NumberProdContext';
import { ShowHeaderProvider } from '~/context/ShowHeaderContext';
import { ShowBagProvider } from '~/context/ShowBagContext';
import { ProductsProvider } from '~/context/ProductsContext';
import Footer from '~/components/Footer';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <ProductsProvider>
            <NumProdProvider>
                <ShowHeaderProvider>
                    <ShowBagProvider>
                        <div className={cx('container')}>
                            <Header />
                            <main>{children}</main>
                            <Footer />
                        </div>
                    </ShowBagProvider>
                </ShowHeaderProvider>
            </NumProdProvider>
        </ProductsProvider>
    );
}

export default DefaultLayout;
