import classNames from 'classnames/bind';
import styles from './Headermenu.module.scss';

const cx = classNames.bind(styles);

function Headermenu({ menuitems }) {
    return (
        <div className={cx('header-menu')}>
            <ul>
                {menuitems.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </div>
    );
}

export default Headermenu;
