import Header from '~/components/Header';
import Content from '~/components/Content';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('container')}>
            <Header />
            <Content />
            {/* <div className="content">{children}</div> */}
        </div>
    );
}

export default DefaultLayout;
