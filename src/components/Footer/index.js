import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer>
            <div className={cx('container')}>
                <div className={cx('about_us')}>
                    <h4>About us</h4>
                    <p>
                        Trang web bán hàng của 1 sinh viên sgu mọi hình ảnh là vay mượn từ internet không dùng để kinh
                        doanh
                    </p>
                </div>
                <div className={cx('policy')}>
                    <h4>Policy</h4>
                    <ul>
                        <li>bao hanh</li>
                        <li>cach mua hang</li>
                        <li>cach thanh toan</li>
                        <li>doi tra hang</li>
                    </ul>
                </div>
                <div className={cx('store_system')}>
                    <h4>Store System</h4>
                    <ul>
                        <li> 📍 125 Phố Huế, Hai Bà Trưng, Hà Nội</li>
                        <li> 📍 45 Lê Lợi, Quận 1, TP. HCM</li>
                        <li>📍 210 Nguyễn Văn Linh, Hải Châu, Đà Nẵng </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
