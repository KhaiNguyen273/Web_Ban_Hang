import { useState } from 'react';
import styles from './GalleryThumbImg.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function GalleryThumbImg({ imgs = [], onClick }) {
    const [activeIndex, setActiveIndex] = useState(0);
    return imgs.map((img, index) => {
        return (
            <div
                key={index}
                className={cx('gallery_thumb_img', { active: activeIndex === index })}
                onClick={() => {
                    onClick(img);
                    setActiveIndex(index);
                }}
            >
                <img src={img}></img>
            </div>
        );
    });
}

export default GalleryThumbImg;
