// Bài 3 🧮 Đếm số chẵn lẻ
/**
 * Khối 1: input
 * Nhập 3 số bất kỳ
 * 
 * Khối 2: các bước xử lý
 * B1: Nhập 3 số bất kỳ và lưu vào biến
 * B2: So sánh từng số liệu có chia hết cho 2 => số chẵn
 * B3: Lấy 3 trừ đi số số chẵn ở B2 để lấy số lẻ
 * B4: Hiển thị kết quả ra màn hình UI
 * 
 * 
 * Khối 3: Output
 * Tính ra số số chẵn, số lẻ
 * In kết quả ra giao diện UI
 */
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
