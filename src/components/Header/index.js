import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Headermenu } from './HeaderMenu';
const cx = classNames.bind(styles);

const header_menu = ['Home', 'Sale', 'New', 'Men', 'Women'];

function Header() {
    return (
        <header>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('logo')}>Nguyen Store</div>
                    <div className={cx('search')}>
                        <input placeholder="Find..."></input>
                        <div className={cx('search-icon')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                    <div className={cx('menu')}>
                        <div className={cx('menu-icon-user')}>
                            <FontAwesomeIcon icon={faUser} />
                            <span>Login/Register</span>
                        </div>
                        <div className={cx('menu-icon-bag')}>
                            <FontAwesomeIcon icon={faBagShopping} />
                            <span className={cx('box-text')}>5</span>
                        </div>
                    </div>
                </div>
                <Headermenu menuitems={header_menu} />
            </div>
        </header>
    );
}

export default Header;
