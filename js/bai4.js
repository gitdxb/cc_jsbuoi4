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