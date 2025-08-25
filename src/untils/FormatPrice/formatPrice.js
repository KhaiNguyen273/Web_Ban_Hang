function formatPrice(priceNumber) {
    if (priceNumber == null) return '';
    return priceNumber.toLocaleString('vi-VN') + '₫';
}

export default formatPrice;
