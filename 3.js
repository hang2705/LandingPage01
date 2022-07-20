// Viết hàm C(n,k) để tính tổ hợp chập k của n phần tử theo công
// thức sau: 
function chapC(n, k) {
    var result = 0;
    var a = 1;
    var b = 1;
    var c = 1;

    for (var i = 1; i < k + 1; i++) {
        a *= i;
    }
    for (var i = 1; i < n + 1; i++) {
        b *= i;
    }
    for (var i = 1; i < (n - k) + 1; i++) {
        c *= i;
    }
    result = b / (a * c)
    return result;

}
console.log(chapC(6, 3));