// Bài 6 🗓️ Tính ngày
function tinhNgay() {
    var thang = Number(document.getElementById("nhapThang").value);
    var nam = Number(document.getElementById("nhapNam").value);
    if (nam % 4 == 0 && nam % 100 != 0) {
        if (thang == 2) {
            document.getElementById("kqBai6").innerHTML = "Tháng " + thang + " năm " + nam + " có 29 ngày";
        } 
    } else if (thang == 2) {
        document.getElementById("kqBai6").innerHTML = "Tháng " + thang + " năm " + nam + " có 28 ngày";
    } else if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
        document.getElementById("kqBai6").innerHTML = "Tháng " + thang + " năm " + nam + " có 31 ngày";
    } else {
        document.getElementById("kqBai6").innerHTML = "Tháng " + thang + " năm " + nam + " có 30 ngày";
    }
}
document.getElementById("btnBai6").onclick = tinhNgay;
/**
 * XONG BÀI 6
 */