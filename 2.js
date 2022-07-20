// Viết hàm sum(x, n) để tính tổng sau
function sumS(x, n) {
    var sum = 0;
    var T = 1;
    var M = 1;

    for (var i = 1; i <= n; i++) {
        T = T * x;
        M = M * i;
        sum = sum + T / M;
        i++;
    }
    return sum;
}
console.log(sumS(2, 2));