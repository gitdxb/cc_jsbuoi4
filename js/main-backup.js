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

    // Trường hợp có 2 số giống nhau
    // if (a == b && a < c) {
    //     document.getElementById("kqBai1").innerHTML = a + " < " + b + " < " + c; //a<b<c
    // } else if (a == c && a < b) {
    //     document.getElementById("kqBai1").innerHTML = a + " < " + c + " < " + b; //a<c<b
    // } else if (b == c && b < a) {
    //     document.getElementById("kqBai1").innerHTML = c + " < " + b + " < " + a; //c<b<a
    // } else if  (a == b && a > c) {
    //     document.getElementById("kqBai1").innerHTML = c + " < " + a + " < " + b; //c<a<b
    // } else if (a == c && a > b) {
    //     document.getElementById("kqBai1").innerHTML = b + " < " + c + " < " + a; //b<c<a
    // } else if (b == c && b > a) {
    //     document.getElementById("kqBai1").innerHTML = a + " < " + c + " < " + b; //a<c<b
    // } else if (a > b && b > c) {
    //     document.getElementById("kqBai1").innerHTML = c + " < " + b + " < " + a; // c<b<a
    // } else if (a > b && c > b && a > c) {
    //     document.getElementById("kqBai1").innerHTML = b + " < " + c + " < " + a; // b<c<a
    // } else if (a > b && c > a) {
    //     document.getElementById("kqBai1").innerHTML = b + " < " + a + " < " + c; // b<a<c
    // } else if (b > a && b > c && a > c) {
    //     document.getElementById("kqBai1").innerHTML = c + " < " + a + " < " + b; // c<a<b
    // } else if (b > c && c > a && b > a) {
    //     document.getElementById("kqBai1").innerHTML = a + " < " + c + " < " + b; // a<c<b
    // } else {
    //     document.getElementById("kqBai1").innerHTML = a + " < " + b + " < " + c; // a<b<c
    // }
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
/**
 * XONG BÀI 2
 */

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
/**
 * XONG BÀI 4
 */

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

// Bài 7 🔢 Đọc số
function docSo() {
    var num = Number(document.getElementById("nhapSo3ChuSo").value);

    // Kiểm tra input hợp lệ
    kiemTra3So(num);

    // Tách từng số
    var a = Math.floor(num / 100); // số hàng trăm
    var b = Math.floor((num % 100) / 10); // số hàng chục
    var c = Math.floor(num % 100) % 10; // số hàng đơn vị

    // Gộp lại đọc số input qua chữ
    var content = hangTram(a) + hangChuc(b) + hangDonVi(c);
    document.getElementById("kqBai7").innerHTML = content;
}
document.getElementById("btnBai7").onclick = docSo;

// Hàm kiểm tra tính hợp lệ
function kiemTra3So(num) {
    if (num < 100 || num > 999) {
        document.getElementById("kqBai7").innerHTML = "Cần nhập 3 chữ số cơ!";
    }
}
// Hàm đọc số hàng trăm
function hangTram(a) {
    var nums = ["Không", "Một", "Hai", "Ba", "Bốn", "Năm", "Sáu", "Bảy", "Tám", "Chín"];
    for (var i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) == a) {
            return nums[i] + " Trăm "
        }
    }

}
// Hàm đọc số hàng chục
function hangChuc(a) {
    var nums = ["Không", "Một", "Hai", "Ba", "Bốn", "Năm", "Sáu", "Bảy", "Tám", "Chín"];
    for (var i = 0; i < nums.length; i++) {
        // Trường hợp nếu hàng chục là 0
        if (nums.indexOf(nums[i]) == a && a == 0) {
            alert("Chữ số hàng chục không xác định được");
            return "Lẻ ";
        } else if (nums.indexOf(nums[i]) == a) { // các trường hợp còn lại, hàng chục ko phải là 0
            // Trường hợp nếu hàng chục là 1, đọc là "Mười"
            if (nums.indexOf(nums[i]) == 1) {
                return " Mười ";
            } else {
                return nums[i] + " Mươi ";
            }
        }
    }
}
// Hàm đọc số hàng đơn vị
function hangDonVi(a) {
    var nums = ["Không", "Một", "Hai", "Ba", "Bốn", "Năm", "Sáu", "Bảy", "Tám", "Chín"];
    for (var i = 0; i < nums.length; i++) {
        // Trường hợp hàng đơn vị là 0, cần xóa string đơn vị
        if (nums.indexOf(nums[i]) == a && a == 0) {
            alert("Chữ số hàng đơn vị không xác định được");
            return '';
        } else if (nums.indexOf(nums[i]) == a) {
            // Trường hợp đơn vị là 5, cần đọc là "Lăm"
            if (nums.indexOf(nums[i]) == 5) {
                return "Lăm";
            }else {
                return nums[i];
            }
        }
    }
}
/**
 * XONG BÀI 7
 */

// Bài 8 🗺️ Tìm sinh viên xa trường nhất