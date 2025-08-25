import { formatPrice, parsePercent } from '~/untils';
import styles from './Product.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Product({ id, name, quantity, price, salepercent, main_imgs, hover_imgs }) {
    return (
        <div className={cx('prod-wrapper')}>
            <a href={`http://localhost:3000/product_info/${id}`} className={cx('img-wrapper')}>
                <img className={cx('main-img')} src={main_imgs} alt={name} />
                <img className={cx('hover-img')} src={hover_imgs} alt={name} />
            </a>
            <div className={cx('prod-infor')}>
                <p className={cx('prod-infor-name')}>{name}</p>
                <p className={cx('prod-infor-quantity')}>{quantity} products left</p>
                {parsePercent(salepercent) > 0 ? (
                    <div className={cx('prod-infor-price')}>
                        {/* Giá sau giảm */}
                        <p className={cx('prod-infor-price-discount')}>
                            {formatPrice(Number(price) * (1 - parsePercent(salepercent)))}
                        </p>
                        {/* Giá gốc */}
                        <p className={cx('prod-infor-price-original')}>{formatPrice(Number(price))}</p>
                    </div>
                ) : (
                    <p className={cx('prod-infor-price')}>{formatPrice(Number(price))}</p>
                )}
            </div>
        </div>
    );
}

export default Product;
