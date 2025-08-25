import { useState, useContext, act } from 'react';
import { numberProdContext } from '~/context/NumberProdContext';
import { showHeaderContext } from '~/context/ShowHeaderContext';
import { showBagContext } from '~/context/ShowBagContext';
import { GalleryThumbImg } from './GalleryThumImg';
import styles from './ProductInforContent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function ProductInforContent({ products, id }) {
    const numProdContext = useContext(numberProdContext);
    const showHeadContext = useContext(showHeaderContext);
    const showBgContext = useContext(showBagContext);
    const [selected, setSelected] = useState('S');
    const [quantity, setQuantity] = useState(1);
    const sizes = ['S', 'M', 'L', 'XL'];

    const product = products.find((p) => p.id === Number(id));

    const [src, setSrc] = useState(product.images[0]);

    const handleQuantity = (type) => {
        setQuantity((prev) => {
            if (type === 'minus') {
                return prev > 1 ? prev - 1 : 1;
            } else if (type === 'plus') {
                return prev + 1;
            } else {
                return prev;
            }
        });
    };

    const handleChange = (e) => {
        const typeValue = e.target.value;
        if (!isNaN(typeValue) && typeValue !== '') {
            setQuantity(Math.max(1, Number(typeValue)));
        } else {
            setQuantity(1);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('gallery')}>
                <div className={cx('gallery_thumb')}>
                    <GalleryThumbImg imgs={product.images} onClick={(img) => setSrc(img)} />
                </div>
                <div className={cx('gallery_thumb_detail')}>
                    <img src={src}></img>
                </div>
            </div>

            <div className={cx('detail')}>
                <div>
                    <h1 className={cx('product-name')}>{product.name}</h1>
                </div>
                <div className={cx('product-price')}>
                    <span className={cx('prod-price')}>{product.price}</span>
                    <del className={cx('prod-price-discount')}>150.000d</del>
                </div>
                <div className={cx('product-size')}>
                    {sizes.map((size) => (
                        <div
                            key={size}
                            className={cx('size-item', { active: selected === size })}
                            onClick={() => setSelected(size)}
                        >
                            {size}
                        </div>
                    ))}
                </div>
                <div className={cx('product-quantity')}>
                    <input onClick={() => handleQuantity('minus')} className={cx('minus')} value="-" type="button" />
                    <input onChange={(e) => handleChange(e)} className={cx('quantity')} value={quantity} type="text" />
                    <input onClick={() => handleQuantity('plus')} className={cx('plus')} value="+" type="button" />
                </div>
                <div className={cx('add-to-cart')}>
                    <button
                        onClick={() => {
                            numProdContext.handleNumProd(quantity);
                            showHeadContext.setShowHeader(true);
                            showBgContext.setShowBag(true);
                        }}
                        className={cx('btn-add-to-cart')}
                    >
                        Add To Cart
                    </button>
                </div>
                <div className={cx('product-description')}>
                    <h2 className={cx('title')}>Mô Tả</h2>
                    <div className={cx('description')}>
                        <p>
                            VISION L/S TEE - Chiếc áo tay dài mới nằm trong bộ sưu tập "THE FUTURE IS BRIGHT" được thiết
                            kế theo phong cách streetwear hiện đại kết hợp retro thể thao với điểm nhấn nằm ở những họa
                            tiết ở mặt trước và 2 bên tay áo được in lụa sắc nét. Phần bo cổ đặc biệt được dệt riêng
                            bằng sợi PE dày dặn kèm dây rút ở lai áo giúp điều chỉnh linh hoạt và duy trì form dáng đẹp.
                            Áo L/S SWE được sử dụng vải cá sấu TC 35% COTTON - 65% POLYESTER, định lượng 230gsm, thiết
                            kế form áo long sleeve nên chất lượng các bạn có thể hoàn toàn yên tâm với sản phẩm nhà SWE.
                            Form áo được Fit size theo form và tiêu chuẩn tương đối của người Việt Nam, nếu bạn đang cân
                            nhắc giữa hai size, nên chọn size lớn hơn. Size S: Chiều cao dưới 1m65, cân nặng dưới 65kg
                            Size M: Chiều cao từ 1m65 - 1m75, cân nặng dưới 75kg Size L: Chiều cao từ 1m75 - 1m85, cân
                            nặng dưới 90kg Size XL: Chiều cao từ 1m85 trở lên, cân nặng dưới 120kg Các bạn vui lòng tham
                            khảo bảng size chart trước khi đặt hàng. * Lưu ý: Hạn chế sử dụng máy sấy nhiệt cao để giữ
                            form áo. NOW AVAILABLE ONLINE & IN - STORE
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductInforContent;
