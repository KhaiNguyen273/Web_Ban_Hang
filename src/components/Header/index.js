import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCaretUp, faMagnifyingGlass, faTriangleCircleSquare } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Headermenu } from './HeaderMenu';
import { useContext, useEffect, useRef, useState } from 'react';
import { numberProdContext } from '~/context/NumberProdContext';
import { showHeaderContext } from '~/context/ShowHeaderContext';
import { showBagContext } from '~/context/ShowBagContext';

const cx = classNames.bind(styles);

const header_menu = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Sale' },
    { id: 3, name: 'New' },
    { id: 4, name: 'Men' },
    { id: 5, name: 'Women' },
];

function Header() {
    const numProdContext = useContext(numberProdContext);
    const showHeadContext = useContext(showHeaderContext);
    const showBgContext = useContext(showBagContext);
    const refDropDown = useRef();
    useEffect(() => {
        window.addEventListener('scroll', showHeadContext.handleScroll);
        return () => window.removeEventListener('scroll', showHeadContext.handleScroll);
    }, [showHeadContext.lastScrollY]);

    useEffect(() => {
        if (!showHeadContext.showHeader) {
            showBgContext.setShowBag(false);
        }
    }, [showHeadContext.showHeader]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (refDropDown.current && !refDropDown.current.contains(event.target)) {
                showBgContext.setShowBag(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [refDropDown]);

    return (
        <header className={cx('header', { hidden: !showHeadContext.showHeader })}>
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
                        <div ref={refDropDown}>
                            <div
                                className={cx('menu-icon-bag')}
                                onClick={() => showBgContext.setShowBag(!showBgContext.showBag)}
                            >
                                <FontAwesomeIcon icon={faBagShopping} />
                                <span className={cx('box-text')}>{numProdContext.numberProduct}</span>
                            </div>
                            <div className={cx('dropdown-bag')}>
                                <div className={cx('Caretup', { active: showBgContext.showBag })}>
                                    <FontAwesomeIcon icon={faCaretUp} />
                                </div>
                                <div className={cx('dropdown-bag-container', { active: showBgContext.showBag })}>
                                    <p className={cx('dropdown-bag-title')}>Giỏ Hàng</p>
                                    <div className={cx('dropdown-bag-scroll')}></div>
                                    <div className={cx('dropdown-bag-total')}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Headermenu menuitems={header_menu} />
            </div>
        </header>
    );
}

export default Header;
