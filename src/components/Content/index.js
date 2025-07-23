import { Bannerslide } from './BannerSlide';

const banner = [
    'https://theme.hstatic.net/1000344185/1001270599/14/slideshow_1.jpg?v=371',
    'https://theme.hstatic.net/1000344185/1001270599/14/slideshow_2.jpg?v=371',
];

function Content() {
    return (
        <content>
            <Bannerslide images={banner}></Bannerslide>
        </content>
    );
}

export default Content;
