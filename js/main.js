// Bài 1 📚 Xuất 3 số theo thứ tự tăng dần
// Biến số nguyên a, b, c
// Xử lý khi 2 hoặc 3 số bằng nhau
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
function chaoHoi() {
    var select = document.getElementById('chonThanhVien');
    var option = select.options[select.selectedIndex].innerHTML;
    if (option != "Chọn thành viên") {
        document.getElementById("kqBai2").innerHTML = "Xin chào " + option + " !";
    } else {
        document.getElementById("kqBai2").innerHTML = "Thành viên này không tồn tại";
    }
    
}
document.getElementById("btnBai2").onclick = chaoHoi;

// Bài 3 🧮 Đếm số chẵn lẻ
function demChanLe() {
    var soChan = 0;
    var soLe = 0;
    var soThu1 = Number(document.getElementById("soThu1_b3").value);
    var soThu2 = Number(document.getElementById("soThu2_b3").value);
    var soThu3 = Number(document.getElementById("soThu3_b3").value);
    if (soThu1 % 2 == 0) {
        soChan += 1;
    }
    if (soThu2 % 2 == 0) {
        soChan += 1;
    }
    if (soThu3 % 2 == 0) {
        soChan += 1;
    }
    soLe = 3 - soChan;
    document.getElementById("kqBai3").innerHTML = "Số lẻ: " + soLe + " | Số chẵn: " + soChan;
}
document.getElementById("btnBai3").onclick = demChanLe;
// Bài 4 🔮 Đoán hình tam giác
function doanTamGiac() {
    var canh_1 = Number(document.getElementById("canh1").value);
    var canh_2 = Number(document.getElementById("canh2").value);
    var canh_3 = Number(document.getElementById("canh3").value);

    if (canh_1 == canh_2 && canh_2 == canh_3) {
        document.getElementById("kqBai4").innerHTML = "Tam giác đều";
    } else if (canh_1 == canh_2){
        document.getElementById("kqBai4").innerHTML = "Tam giác cân";
    } else if ((canh_1 ** 2) + (canh_2 ** 2) == (canh_3 ** 2)) {
        document.getElementById("kqBai4").innerHTML = "Tam giác vuông";
    } else {
        document.getElementById("kqBai4").innerHTML = "Tam giác khác";
    }
}
document.getElementById("btnBai4").onclick = doanTamGiac;
// Bài 5 📅 Tính ngày tháng năm

// Bài 6 🗓️ Tính ngày

// Bài 7 🔢 Đọc số

// Bài 8 🗺️ Tìm sinh viên xa trường nhất