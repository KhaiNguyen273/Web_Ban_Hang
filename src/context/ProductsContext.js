import { createContext } from 'react';
const productsContext = createContext();

function ProductsProvider({ children }) {
    const demoProducts = [
        {
            id: 1,
            name: 'SWE CROSS TANK TOP - WHITE',
            quantity: 10,
            price: 200000,
            main_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            hover_imgs:
                'https://cdn.hstatic.net/products/1000344185/swelb1354_239ed533e05442aead3383688f3bb983_large.jpg',
            images: [
                'https://cdn.hstatic.net/products/1000344185/swelb1354_239ed533e05442aead3383688f3bb983_large.jpg',
                'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
                'https://cdn.hstatic.net/products/1000344185/swelb1374_1f317c23d370422bb328e11c11e06fb2_master.jpg',
                'https://cdn.hstatic.net/products/1000344185/2_ebc589348026455bb89e3752f9bf2a37_master.jpg',
                'https://cdn.hstatic.net/products/1000344185/img_9447_4afcb62110b141759eb3167832f3e29e_master.jpg',
                'https://cdn.hstatic.net/products/1000344185/img_9451_9b6ceed320014231a5153be32218f882_master.jpg',
            ],
        },
        {
            id: 2,
            name: 'SWE DREAMER FLATTOP CAP - BEIGE',
            quantity: 5,
            price: 350000,
            main_imgs: 'https://cdn.hstatic.net/products/1000344185/1_8c1c7a7c142b4cc69f1c68916327a031_large.jpg',
            hover_imgs: 'https://cdn.hstatic.net/products/1000344185/2_8e1f912a935647768e2d32be29486239_large.jpg',
            images: [
                'https://cdn.hstatic.net/products/1000344185/1_8c1c7a7c142b4cc69f1c68916327a031_large.jpg',
                'https://cdn.hstatic.net/products/1000344185/2_8e1f912a935647768e2d32be29486239_large.jpg',
                'https://cdn.hstatic.net/products/1000344185/3_90026adac3f74ca4bd28b2dc659673dc_master.jpg',
                'https://cdn.hstatic.net/products/1000344185/6_c73e80eedebe4188a2e2b136145bb80b_master.jpg',
                'https://cdn.hstatic.net/products/1000344185/7_7f0fe03544624e578573d34574f69311_master.jpg',
                'https://cdn.hstatic.net/products/1000344185/5_e6755574ff2941a68d1d8d61e2804cc6_master.jpg',
            ],
        },
        {
            id: 3,
            name: 'Váy công sở',
            quantity: 7,
            price: 400000,
            main_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            hover_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            images: [
                'https://product.hstatic.net/1000344185/product/1_f898d0c6bff04c4da84a3a648252b425_small.jpg',
                'https://product.hstatic.net/1000344185/product/2_b2f9eab0fd1149029024b78dd0823f89_small.jpg',
                'https://product.hstatic.net/1000344185/product/img_4301_f37ca7fd730c4ed28b7335bbfb3154d9_small.jpg',
            ],
        },
        {
            id: 4,
            name: 'Áo khoác lông',
            quantity: 3,
            price: 650000,
            main_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            hover_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            images: [
                'https://product.hstatic.net/1000344185/product/1_f898d0c6bff04c4da84a3a648252b425_small.jpg',
                'https://product.hstatic.net/1000344185/product/2_b2f9eab0fd1149029024b78dd0823f89_small.jpg',
                'https://product.hstatic.net/1000344185/product/img_4301_f37ca7fd730c4ed28b7335bbfb3154d9_small.jpg',
            ],
        },
        {
            id: 5,
            name: 'Giày sneaker',
            quantity: 12,
            price: 900000,
            main_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            hover_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            images: [
                'https://product.hstatic.net/1000344185/product/1_f898d0c6bff04c4da84a3a648252b425_small.jpg',
                'https://product.hstatic.net/1000344185/product/2_b2f9eab0fd1149029024b78dd0823f89_small.jpg',
                'https://product.hstatic.net/1000344185/product/img_4301_f37ca7fd730c4ed28b7335bbfb3154d9_small.jpg',
            ],
        },
        {
            id: 6,
            name: 'Túi xách nữ',
            quantity: 8,
            price: 750000,
            main_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            hover_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            images: [
                'https://product.hstatic.net/1000344185/product/1_f898d0c6bff04c4da84a3a648252b425_small.jpg',
                'https://product.hstatic.net/1000344185/product/2_b2f9eab0fd1149029024b78dd0823f89_small.jpg',
                'https://product.hstatic.net/1000344185/product/img_4301_f37ca7fd730c4ed28b7335bbfb3154d9_small.jpg',
            ],
        },
        {
            id: 7,
            name: 'Đồng hồ nam',
            quantity: 4,
            price: 1200000,
            main_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            hover_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            images: [
                'https://product.hstatic.net/1000344185/product/1_f898d0c6bff04c4da84a3a648252b425_small.jpg',
                'https://product.hstatic.net/1000344185/product/2_b2f9eab0fd1149029024b78dd0823f89_small.jpg',
                'https://product.hstatic.net/1000344185/product/img_4301_f37ca7fd730c4ed28b7335bbfb3154d9_small.jpg',
            ],
        },
        {
            id: 8,
            name: 'Mắt kính thời trang',
            quantity: 6,
            price: 320000,
            main_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            hover_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            images: [
                'https://product.hstatic.net/1000344185/product/1_f898d0c6bff04c4da84a3a648252b425_small.jpg',
                'https://product.hstatic.net/1000344185/product/2_b2f9eab0fd1149029024b78dd0823f89_small.jpg',
                'https://product.hstatic.net/1000344185/product/img_4301_f37ca7fd730c4ed28b7335bbfb3154d9_small.jpg',
            ],
        },
        {
            id: 9,
            name: 'Áo sơ mi nam',
            quantity: 9,
            price: 270000,
            main_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            hover_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            images: [
                'https://product.hstatic.net/1000344185/product/1_f898d0c6bff04c4da84a3a648252b425_small.jpg',
                'https://product.hstatic.net/1000344185/product/2_b2f9eab0fd1149029024b78dd0823f89_small.jpg',
                'https://product.hstatic.net/1000344185/product/img_4301_f37ca7fd730c4ed28b7335bbfb3154d9_small.jpg',
            ],
        },
        {
            id: 10,
            name: 'Giày thể thao nữ',
            quantity: 2,
            price: 850000,
            main_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            hover_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            images: [
                'https://product.hstatic.net/1000344185/product/1_f898d0c6bff04c4da84a3a648252b425_small.jpg',
                'https://product.hstatic.net/1000344185/product/2_b2f9eab0fd1149029024b78dd0823f89_small.jpg',
                'https://product.hstatic.net/1000344185/product/img_4301_f37ca7fd730c4ed28b7335bbfb3154d9_small.jpg',
            ],
        },
        {
            id: 11,
            name: 'Thắt lưng da',
            quantity: 11,
            price: 180000,
            main_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            hover_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            images: [
                'https://product.hstatic.net/1000344185/product/1_f898d0c6bff04c4da84a3a648252b425_small.jpg',
                'https://product.hstatic.net/1000344185/product/2_b2f9eab0fd1149029024b78dd0823f89_small.jpg',
                'https://product.hstatic.net/1000344185/product/img_4301_f37ca7fd730c4ed28b7335bbfb3154d9_small.jpg',
            ],
        },
        {
            id: 12,
            name: 'Nón bucket',
            quantity: 15,
            price: 150000,
            main_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            hover_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            images: [
                'https://product.hstatic.net/1000344185/product/1_f898d0c6bff04c4da84a3a648252b425_small.jpg',
                'https://product.hstatic.net/1000344185/product/2_b2f9eab0fd1149029024b78dd0823f89_small.jpg',
                'https://product.hstatic.net/1000344185/product/img_4301_f37ca7fd730c4ed28b7335bbfb3154d9_small.jpg',
            ],
        },
        {
            id: 13,
            name: 'Áo hoodie',
            quantity: 6,
            price: 390000,
            main_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            hover_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            images: [
                'https://product.hstatic.net/1000344185/product/1_f898d0c6bff04c4da84a3a648252b425_small.jpg',
                'https://product.hstatic.net/1000344185/product/2_b2f9eab0fd1149029024b78dd0823f89_small.jpg',
                'https://product.hstatic.net/1000344185/product/img_4301_f37ca7fd730c4ed28b7335bbfb3154d9_small.jpg',
            ],
        },
        {
            id: 14,
            name: 'Quần short',
            quantity: 7,
            price: 220000,
            main_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            hover_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            images: [
                'https://product.hstatic.net/1000344185/product/1_f898d0c6bff04c4da84a3a648252b425_small.jpg',
                'https://product.hstatic.net/1000344185/product/2_b2f9eab0fd1149029024b78dd0823f89_small.jpg',
                'https://product.hstatic.net/1000344185/product/img_4301_f37ca7fd730c4ed28b7335bbfb3154d9_small.jpg',
            ],
        },
        {
            id: 15,
            name: 'Balo laptop',
            quantity: 5,
            price: 600000,
            main_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            hover_imgs: 'https://cdn.hstatic.net/products/1000344185/1_1d2efa0159474be9bc2fa70dde8e59dc_large.jpg',
            images: [
                'https://product.hstatic.net/1000344185/product/1_f898d0c6bff04c4da84a3a648252b425_small.jpg',
                'https://product.hstatic.net/1000344185/product/2_b2f9eab0fd1149029024b78dd0823f89_small.jpg',
                'https://product.hstatic.net/1000344185/product/img_4301_f37ca7fd730c4ed28b7335bbfb3154d9_small.jpg',
            ],
        },
    ];

    const value = {
        demoProducts,
    };

    return <productsContext.Provider value={value}>{children}</productsContext.Provider>;
}

export { ProductsProvider, productsContext };
