import styles from './CartContent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function CartContent() {
    return (
        <div className={cx('container')}>
            <div className={cx('products')}></div>
            <div className={cx('totals')}></div>
        </div>
    );
}

export default CartContent;
