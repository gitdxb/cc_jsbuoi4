// Bài 5 📅 Tính ngày tháng năm
/**
 * Khối 1: input
 * Các giá trị ngày, tháng, năm
 * 
 * 
 * Khối 2: các bước xử lý
 * B1: nhận giá trị vào form và lưu giá trị ngày, tháng, năm vào các biến
 * B2: Tạo 2 hàm ngayHomQua() và ngayMai() để tính thời gian trc và sau 1 ngày từ thông tin input
 * B3: Xử lý chương trình cho ngayHomQua()
 * B3.1: Kiểm tra input hợp lệ
 * B3.2: Xử lý trường hợp cho tháng 2 với 28 ngày
 * B3.3: Xử lý với trường hợp các tháng có 30 ngày và ngày đầu của năm
 * B3.4 Xử lý với trường hợp các tháng có 31 ngày
 * B3.5: In kết quả ra giao diện
 * B4: Xử lý chương trình ngayMai()
 * B4.1: Kiểm tra input hợp lệ
 * B4.2: Xử lý trường hợp cho tháng 2
 * B4.3: Xử lý trường hợp với các tháng có 30 ngày
 * B4.4: Xử lý trường hợp với các tháng có 31 ngày và ngày cuối cùng của năm
 * B4.5: In kết quả ra giao diện
 * 
 * 
 * Khối 3: output
 * Hiển thị kết quả cho: ngày hôm qua, và ngày mai
 * 
 */

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
            if (thang == 1) { // Trường hợp ngày 1/1
                ngay = 31;
                thang = 12;
                nam = nam - 1;
                document.getElementById("kqBai5").innerHTML = ngay + "/" + thang + "/" + nam;
            } else {
                ngay = 30;
                thang = thang - 1;
                document.getElementById("kqBai5").innerHTML = ngay + "/" + thang + "/" + nam;
            }
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
            if (thang == 12) { // Trường hợp ngày 31/12
                ngay = 1;
                thang = 1;
                nam += 1;
                document.getElementById("kqBai5").innerHTML = ngay + "/" + thang + "/" + nam;
            } else {
                ngay = 1;
                thang = thang + 1;
                document.getElementById("kqBai5").innerHTML = ngay + "/" + thang + "/" + nam;
            }
        } else {
            ngay = ngay + 1;
            document.getElementById("kqBai5").innerHTML = ngay + "/" + thang + "/" + nam;
        }
    }
}
document.getElementById("btnNgayMai").onclick = ngayMai;
