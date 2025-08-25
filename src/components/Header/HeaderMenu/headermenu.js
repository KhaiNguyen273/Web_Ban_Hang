import classNames from 'classnames/bind';
import styles from './Headermenu.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Headermenu({ menuitems }) {
    return (
        <div className={cx('header-menu')}>
            <ul>
                {menuitems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.name === 'Home' ? '/' : `/${item.name}`}>{item.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Headermenu;
