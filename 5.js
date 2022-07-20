
// Viết hàm isFrequently(n) tìm chữ số xuất hiện nhiều nhất trong số
// nguyên dương n cho trước.
// VD: n = 1223334, isFrequently(n) = 3;
function isFrequently(n) {
    var max = 0;
    if (n == 0) return 0;
    /*Lay tri tuyet do cua so nguyen n*/
    for (var i = 0; i < Math.abs(n); i++) {
        var temp = n % 10;
        n = Math.floor(n / 10);
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}
console.log(isFrequently(12959));