import classNames from 'classnames/bind';
import styles from './Bannerslide.module.scss';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const cx = classNames.bind(styles);

function Bannerslide({ images }) {
    const swiperRef = useRef();

    return (
        <div className={cx('wrapper')}>
            <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={1}
                loop={true}
                className={cx('swiper-wrapper')}
            >
                {images.map((img, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={img} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <button className={cx('btn-prev')} onClick={() => swiperRef.current.slidePrev()}>
                ←
            </button>
            <button className={cx('btn-next')} onClick={() => swiperRef.current.slideNext()}>
                →
            </button>
        </div>
    );
}

export default Bannerslide;
