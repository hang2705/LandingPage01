// 1. Hãy sử dụng vòng lặp viết hàm isPalindromNumber(n) để kiểm tra
// một số có phải số đối xứng hay không? Số đối xứng là số mà khi
// đọc xuôi hay đọc ngược đều giống nhau.
// VD: n = 121 -> true, n = 1332 -> false
function isPalindromNumber(n) {
    var reversed = 0;
    var original = n;
    while (n != 0) {
        var number = n % 10;
        reversed = reversed * 10 + number;
        n = Math.floor(n / 10);
    }
    if (reversed == original) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindromNumber(121));
// 
function isPalindromNumber1(n) {
    var reversed = 0, temp;
    for (temp = n; n != 0; n = Math.floor(n / 10)) {
        number = n % 10;
        reversed = reversed * 10 + number;
    }
    if (temp == reversed)
        return true;
    else
        return false;
}
console.log(isPalindromNumber1(1231));
console.log(isPalindromNumber1(121));