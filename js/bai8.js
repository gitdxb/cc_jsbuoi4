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
 * 
 * 
 * Khối 3:
 * In kết quả ra giao diện bạn xa trường nhất
 */

function thangNaoXaNhat () {
    // Sinh viên 1
    var sv1_Ten = document.getElementById('sv1_Ten').value;
    var sv1_X = Number(document.getElementById('sv1_X').value);
    var sv1_Y = Number(document.getElementById('sv1_Y').value);
    console.log('Sinh vien 1: ', sv1_Ten, sv1_X, sv1_Y);

    // Sinh viên 2
    var sv2_Ten = document.getElementById('sv2_Ten').value;
    var sv2_X = Number(document.getElementById('sv2_X').value);
    var sv2_Y = Number(document.getElementById('sv2_Y').value);
    console.log('Sinh vien 2: ', sv2_Ten, sv2_X, sv2_Y);

    // Sinh viên 3
    var sv3_Ten = document.getElementById('sv3_Ten').value;
    var sv3_X = Number(document.getElementById('sv3_X').value);
    var sv3_Y = Number(document.getElementById('sv3_Y').value);
    console.log('Sinh vien 3: ', sv3_Ten, sv3_X, sv3_Y);

    //Trường học
    var truongX = Number(document.getElementById('truongX').value);
    var truongY = Number(document.getElementById('truongY').value);
    console.log('Truong hoc: ', truongX, truongY);
}
document.getElementById('btnBai8').onclick = thangNaoXaNhat;