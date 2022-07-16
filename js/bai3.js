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
/**
 * XONG BÀI 3
 */
