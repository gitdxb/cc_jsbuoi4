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