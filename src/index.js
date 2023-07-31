module.exports = function reverse (n) {
    n = Math.abs(n);

    if (n < 10) {
        return n;
    }

    let result = 0;

    while (n >= 1) {
        let lastDigit = n % 10;
        result = result * 10 + lastDigit;
        n = Math.floor(n / 10);
    }

    return result;
}
