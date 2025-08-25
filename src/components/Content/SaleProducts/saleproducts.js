import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { useRef } from 'react';
import { Product } from '../Product';
import classNames from 'classnames/bind';
import styles from './SaleProducts.module.scss';
import { numberProdContext } from '~/context/NumberProdContext';
import { showHeaderContext, ShowHeaderProvider } from '~/context/ShowHeaderContext';
import { useContext } from 'react';

const cx = classNames.bind(styles);
function SaleProducts({ products = [] }) {
    const swiperRef = useRef();
    const numProdContext = useContext(numberProdContext);
    const showHeadContext = useContext(showHeaderContext);

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    <h2>SALE</h2>
                </div>
                <Swiper
                    modules={[Navigation]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView={5}
                    loop={true}
                    // className={cx('swiper-wrapper')}
                >
                    {products.map((product, index) => {
                        return (
                            <SwiperSlide key={index} className={cx('swiper_slide')}>
                                <Product
                                    name={product.name}
                                    quantity={product.quantity}
                                    price={product.price}
                                    handleNumProd={numProdContext.handleNumProd}
                                    setShowHeader={showHeadContext.setShowHeader}
                                    salepercent={product.salepercent}
                                ></Product>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <button className={cx('btn-prev')} onClick={() => swiperRef.current.slidePrev()}>
                    ←
                </button>
                <button className={cx('btn-next')} onClick={() => swiperRef.current.slideNext()}>
                    →
                </button>
            </div>
        </div>
    );
}

export default SaleProducts;
