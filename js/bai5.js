// Bài 5 📅 Tính ngày tháng năm

function ngayHomQua() {
    var ngay = Number(document.getElementById("b5Ngay").value);
    var thang = Number(document.getElementById("b5Thang").value);
    var nam = Number(document.getElementById("b5Nam").value);
    
    // Kiểm tra đầu vào
    if (ngay < 0 || ngay > 31) {
        return document.getElementById("kqBai5").innerHTML = "Ngày không đúng";
    }
    if (thang > 12 || thang < 1) {
       return document.getElementById("kqBai5").innerHTML = "Tháng không đúng";
    }

    // Trường hợp tháng 2
    if (thang == 2 && ngay <= 28) {
        if (ngay == 1) {
            ngay = 31;
            thang = thang - 1;
            document.getElementById("kqBai5").innerHTML = ngay + "/" + thang + "/" + nam;
        } else {
            ngay = ngay - 1;
            document.getElementById("kqBai5").innerHTML = ngay + "/" + thang + "/" + nam;
        }
    }

    // Trường hợp tháng có 30 ngày
    if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
        if (ngay == 1) {
            ngay = 31;
            thang = thang - 1;
            document.getElementById("kqBai5").innerHTML = ngay + "/" + thang + "/" + nam;
        } else {
            ngay = ngay - 1;
            document.getElementById("kqBai5").innerHTML = ngay + "/" + thang + "/" + nam;
        }
    } else { // Trường hợp các tháng có 31 ngày
        if (ngay == 1) {
            ngay = 30;
            thang = thang - 1;
            document.getElementById("kqBai5").innerHTML = ngay + "/" + thang + "/" + nam;
        } else {
            ngay = ngay - 1;
            document.getElementById("kqBai5").innerHTML = ngay + "/" + thang + "/" + nam;
        }
    }
}
document.getElementById("btnNgayHomQua").onclick = ngayHomQua;

function ngayMai() {
    var ngay = Number(document.getElementById("b5Ngay").value);
    var thang = Number(document.getElementById("b5Thang").value);
    var nam = Number(document.getElementById("b5Nam").value);
    
    // Kiểm tra đầu vào
    if (ngay < 0 || ngay > 31) {
        return document.getElementById("kqBai5").innerHTML = "Ngày không đúng";
    }
    if (thang > 12 || thang < 1) {
       return document.getElementById("kqBai5").innerHTML = "Tháng không đúng";
    }

    // Trường hợp tháng 2
    if (thang == 2 && ngay <= 28) {
        if (ngay == 28) {
            ngay = 1;
            thang = thang + 1;
            document.getElementById("kqBai5").innerHTML = ngay + "/" + thang + "/" + nam;
        } else {
            ngay = ngay + 1;
            document.getElementById("kqBai5").innerHTML = ngay + "/" + thang + "/" + nam;
        }
    }

    // Trường hợp tháng có 30 ngày
    if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
        if (ngay == 30) {
            ngay = 1;
            thang = thang + 1;
            document.getElementById("kqBai5").innerHTML = ngay + "/" + thang + "/" + nam;
        } else {
            ngay = ngay + 1;
            document.getElementById("kqBai5").innerHTML = ngay + "/" + thang + "/" + nam;
        }
    } else { // Trường hợp các tháng có 31 ngày
        if (ngay == 31) {
            ngay = 1;
            thang = thang + 1;
            document.getElementById("kqBai5").innerHTML = ngay + "/" + thang + "/" + nam;
        } else {
            ngay = ngay + 1;
            document.getElementById("kqBai5").innerHTML = ngay + "/" + thang + "/" + nam;
        }
    }
}
document.getElementById("btnNgayMai").onclick = ngayMai;
