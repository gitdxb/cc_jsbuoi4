// Bài 2 👋 Chương trình "Chào hỏi"
/**
 * Mô hình 3 khối
 * Khối 1: input
 * select - chọn thành viên cần chào (Bố,mẹ, anh trai, em gái)
 * 
 * Khối 2: cách bước xử lý
 * B1: Chọn thành viên
 * B2: Lấy giá trị từ element được chọn từ danh sách thành viên
 * B3: In ra UI kết quả
 * 
 * 
 * Khối 3: output
 * In ra giao diện UI nội dung "Xin chào..."
 */
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