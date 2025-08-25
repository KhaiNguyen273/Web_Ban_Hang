import { useState, createContext } from 'react';
import { showToast } from '~/untils';
const numberProdContext = createContext();

function NumProdProvider({ children }) {
    const [numberProduct, setNumberProduct] = useState(0);
    const handleNumProd = (numProd) => {
        setNumberProduct((prev) => prev + numProd);
        // showToast('Đã thêm sản phẩm vào giỏ!', true);
    };
    const value = {
        numberProduct,
        handleNumProd,
    };

    return <numberProdContext.Provider value={value}>{children}</numberProdContext.Provider>;
}

export { NumProdProvider, numberProdContext };
