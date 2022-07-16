// Bài 4 🔮 Đoán hình tam giác
/**
 * Khối 1: input
 * Nhập 3 cạnh của 1 tam giác
 * 
 * Khối 2: các bước xử lý
 * B1: Lưu giá trị 3 cạnh của 1 tam giác vào biến
 * B2: Dựa trên công thức tam giác, kiểm tra 3 cạnh thuộc loại tam giác gì
 * B3: Hiển thị kết quả ra màn hình
 * 
 * 
 * Khối 3: Output
 * In ra màn hình loại tam giác
 */
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