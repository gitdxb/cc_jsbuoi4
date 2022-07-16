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