// Viết hàm sum(n) tính tổng luỹ thừa bậc 4 của các chữ số trong 1
// số nguyên dương n cho trước
// VD: n = 1234, sum(n) = 1^4 + 2^4 + 3^4 + 4^4 = 354
// tách từng số ra, số thứ nhất sẽ mũ 4 lên và cộng dồn lại
function sum(n) {
    var sum = 1;
    if (n <= 0) return 0;

    for (var i = 1; i < n; i++) {
        var temp = n % 10;

        if (i % 2 == 0) {
            sum += temp ** 4;
        } else {
            sum += temp ** 4;
            i++;
        }
        n = Math.floor(n / 10);
    }
    return sum;
}
console.log(sum(1234));