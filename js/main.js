// Bài 1 📚 Xuất 3 số theo thứ tự tăng dần
// Biến số nguyên a, b, c
function xepSoTangDan() {
    var a = Number(document.getElementById("soThu1").value);
    var b = Number(document.getElementById("soThu2").value);
    var c = Number(document.getElementById("soThu3").value);

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
document.getElementById("btnBai1").onclick = xepSoTangDan;

// Bài 2 👋 Chương trình "Chào hỏi"

// Bài 3 🧮 Đếm số chẵn lẻ

// Bài 4 🔮 Đoán hình tam giác

// Bài 5 📅 Tính ngày tháng năm

// Bài 6 🗓️ Tính ngày

// Bài 7 🔢 Đọc số

// Bài 8 🗺️ Tìm sinh viên xa trường nhất