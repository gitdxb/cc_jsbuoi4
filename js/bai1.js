// Bài 1 📚 Xuất 3 số theo thứ tự tăng dần
// Biến số nguyên a, b, c
// Xử lý khi 2 hoặc 3 số bằng nhau
function xepSoTangDan() {
    var a = Number(document.getElementById("soThu1").value);
    var b = Number(document.getElementById("soThu2").value);
    var c = Number(document.getElementById("soThu3").value);

    // Xét trường hợp có 2 số giống nhau
    if (a == b || b == c || a == c) {
        ktSoGiongNhau(a,b,c);
    } else {
        // Xét trường hợp thông thường, ko có 2 số bất kì giống nhau
        kt3SoKhacNhau(a,b,c);
    }
}
document.getElementById("btnBai1").onclick = xepSoTangDan;

// Helper function
function ktSoGiongNhau(a,b,c) {
    if (a == b && a < c) {
        document.getElementById("kqBai1").innerHTML = a + " < " + b + " < " + c; //a<b<c
    } else if (a == c && a < b) {
        document.getElementById("kqBai1").innerHTML = a + " < " + c + " < " + b; //a<c<b
    } else if (b == c && b < a) {
        document.getElementById("kqBai1").innerHTML = c + " < " + b + " < " + a; //c<b<a
    } else if  (a == b && a > c) {
        document.getElementById("kqBai1").innerHTML = c + " < " + a + " < " + b; //c<a<b
    } else if (a == c && a > b) {
        document.getElementById("kqBai1").innerHTML = b + " < " + c + " < " + a; //b<c<a
    } else if (b == c && b > a) {
        document.getElementById("kqBai1").innerHTML = a + " < " + c + " < " + b; //a<c<b
    }
}
function kt3SoKhacNhau(a,b,c) {
    if (a > b && b > c) {
        document.getElementById("kqBai1").innerHTML = c + " < " + b + " < " + a; // c<b<a
    } else if (a > b && c > b && a > c) {
        document.getElementById("kqBai1").innerHTML = b + " < " + c + " < " + a; // b<c<a
    } else if (a > b && c > a) {
        document.getElementById("kqBai1").innerHTML = b + " < " + a + " < " + c; // b<a<c
    } else if (b > a && b > c && a > c) {
        document.getElementById("kqBai1").innerHTML = c + " < " + a + " < " + b; // c<a<b
    } else if (b > c && c > a && b > a) {
        document.getElementById("kqBai1").innerHTML = a + " < " + c + " < " + b; // a<c<b
    } else {
        document.getElementById("kqBai1").innerHTML = a + " < " + b + " < " + c; // a<b<c
    }
}
/**
 * XONG BÀI 1
 */