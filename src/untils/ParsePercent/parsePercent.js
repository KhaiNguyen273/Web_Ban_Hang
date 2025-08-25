function parsePercent(value) {
    if (value == null || value === '') return null;

    let str = String(value).trim();

    if (str.endsWith('%')) {
        return parseFloat(str.slice(0, -1)) / 100;
    }

    let num = parseFloat(str);
    if (isNaN(num)) return null;

    if (num > 1) {
        return num / 100;
    }

    return num;
}

export default parsePercent;
