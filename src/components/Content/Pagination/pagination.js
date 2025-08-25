import styles from './Pagination.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Pagination({ totalPages, currentPage, onPageChange }) {
    let pages = [];
    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    } else {
        if (currentPage <= 3) {
            pages.push(1, 2, 3, 4, '...', totalPages);
        } else if (currentPage >= totalPages - 2) {
            pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
        } else {
            pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
        }
    }

    return (
        <div className={cx('page-num')}>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                style={{
                    border: 'none',
                    borderRadius: '4px',
                    visibility: currentPage === 1 ? 'hidden' : 'visible',
                }}
            >
                prev
            </button>
            {pages.map((page, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(page)}
                    disabled={page === '...'}
                    style={{
                        cursor: page === '...' ? 'default' : 'pointer',
                        color: page === currentPage ? 'rgba(5, 5, 5, 0.945)' : 'rgba(83, 82, 82, 0.829)',
                    }}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                style={{
                    border: 'none',
                    borderRadius: '4px',
                    visibility: currentPage === totalPages ? 'hidden' : 'visible',
                }}
            >
                next
            </button>
        </div>
    );
}

export default Pagination;
