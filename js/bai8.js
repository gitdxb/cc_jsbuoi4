// Bài 8 🗺️ Tìm sinh viên xa trường nhất
/**
 * Khối 1: input
 * Tên sinh viên
 * Tọa độ nhà ở của các sinh viên (x,y)
 * Tọa độ của trường học
 * 
 * Khối 2: các bước xử lý
 * B1: Nhập input và lưu vào các biến cho 3 sinh viên và tọa độ nhà của 3 sinh viên đó
 * B2: Nhập tọa độ trường học và lưu vào biến
 * B3: Lập công thức tính quãng đường giữa trường học và nhà 3 sv
 * B4: So sánh quãng đường dài nhất giữa 3 sv và trường
 * B5: In kết quả quãng đường dài nhất ra UI
 * 
 * 
 * Khối 3:
 * In kết quả ra giao diện bạn xa trường nhất
 */

function svXaTruongNhat () {
    // Sinh viên 1
    var sv1_Ten = document.getElementById('sv1_Ten').value;
    var sv1_X = Number(document.getElementById('sv1_X').value);
    var sv1_Y = Number(document.getElementById('sv1_Y').value);

    // Sinh viên 2
    var sv2_Ten = document.getElementById('sv2_Ten').value;
    var sv2_X = Number(document.getElementById('sv2_X').value);
    var sv2_Y = Number(document.getElementById('sv2_Y').value);

    // Sinh viên 3
    var sv3_Ten = document.getElementById('sv3_Ten').value;
    var sv3_X = Number(document.getElementById('sv3_X').value);
    var sv3_Y = Number(document.getElementById('sv3_Y').value);

    //Trường học
    var truongX = Number(document.getElementById('truongX').value);
    var truongY = Number(document.getElementById('truongY').value);
    

    var dsv1 = Math.hypot(sv1_X-truongX, sv1_Y-truongY); // Độ dài quãng đường đến nhà sv1
    var dsv2 = Math.hypot(sv2_X-truongX, sv2_Y-truongY); // Độ dài quãng đường đến nhà sv2
    var dsv3 = Math.hypot(sv3_X-truongX, sv3_Y-truongY); // Độ dài quãng đường đến nhà sv3

    // So sánh 3 quãng đường
    if (dsv1 > dsv2 && dsv1 > dsv3) {
        document.getElementById('kqBai8').innerHTML = 'Sinh viên xa trường nhất: ' + sv1_Ten;
    } else if (dsv2 > dsv1 && dsv2 > dsv3) {
        document.getElementById('kqBai8').innerHTML = 'Sinh viên xa trường nhất: ' + sv2_Ten;
    } else {
        document.getElementById('kqBai8').innerHTML = 'Sinh viên xa trường nhất: ' + sv3_Ten;
    }
}
document.getElementById('btnBai8').onclick = svXaTruongNhat;