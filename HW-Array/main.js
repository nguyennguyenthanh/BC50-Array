//GLOBAL
// Hàm Dom:
function getEle(id) {
  return document.getElementById(id);
}
//Hàm xuất kết quả:
function xuatKetQua(id, result) {
  return getEle(id).innerHTML = result;
}


// <------------BÀI 1: Tổng số dương trong mảng----------->
var listNumber = [];
getEle("btnThemSo").onclick = function () {
  var number = getEle("txtNum1").value * 1;
  console.log(number);
  //thêm phần tử vào mảng listNumber
  listNumber.push(number);
  getEle("footer1").innerHTML = listNumber;
}

// Hàm Tính Tổng Số Dương:
getEle("btnTinhTong").onclick = function () {
  var tongSoDuong = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      tongSoDuong += listNumber[i];
    }
  }
  xuatKetQua("footer1", tongSoDuong);
}
// <------------BÀI 2: Đếm số dương trong mảng----------->
// Hàm Đếm Tổng Số Dương:
getEle("btnDemSo").onclick = function () {
  var soDuong = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      soDuong += 1;
    }
  }
  xuatKetQua("footer1", soDuong);
}
//24,6,4,7,8
// <------------BÀI 3: tìm số nhỏ nhất trong mảng----------->
/**
 * B1: Cho biến tạm là số vị trí đầu trong mảng và là giá trị nhỏ nhất
 * B2: nếu mà giá trị nào trong mảng lớn hơn biến nhỏ nhất thì cho biến nhỏ nhất = giá trị đó
 */
getEle("btnSoNhoNhat").onclick = function () {
  var min = listNumber[0];
  for (var i = 1; i < listNumber.length; i++) {
    if (min > listNumber[i]) {
      min = listNumber[i];
    }
  }
  xuatKetQua("footer1", min);
}
// <------------BÀI 4: tìm số dương nhỏ nhất trong mảng----------->
getEle("btnDuongMin").onclick = function () {
  var min = listNumber[0];
  for (var i = 1; i < listNumber.length; i++) {
    if (min > listNumber[i] && listNumber > 0) {
      min = listNumber[i];
    }
  }
  xuatKetQua("footer1", min);
}
/*
<------------BÀI 5: tìm số chẵn cuối cùng trong mảng, nếu mảng k giá trị chẵn thì trả về -1  ----------->
  1,-1,2,3,6,9
  B1: có phải số chẵn k? => xét
  B2:
*/
getEle("btnSoChanCuoi").onclick = function () {
  var soChanCuoiCung = -1;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] % 2 === 0) {
      soChanCuoiCung = listNumber[i];
    }
  }
  xuatKetQua("footer1", soChanCuoiCung);
}
// <------------BÀI 6: đổi chỗ 2 giá trị trong mảng theo vị trí(cho nhập vào 2 vị trí muốn đổi chỗ giá trị)----------->
/*
  mảng array:
  vị trí x: 1
  vị trí y: 3

  array[x] = array[y]
  array[y] = array[x]
  3,5,-2,7,9

  3,7,-2,5,9

  var lythu3 = array[x];
  array[x] = array[y];
  array[y] = lythu3;

*/
getEle("btnDoiViTri").onclick = function () {
  var viTri1 = +getEle("txtNum2").value;
  var viTri2 = +getEle("txtNum3").value;
  if (viTri1 > listNumber.length || viTri2 > listNumber.length) {
    return;
  }
  var temp = listNumber[viTri1];
  listNumber[viTri1] = listNumber[viTri2];
  listNumber[viTri2] = temp;
  xuatKetQua("footer1", listNumber);
}
// <------------BÀI 7: Sắp xếp mảng theo thứ tự tăng dần----------->
getEle("btnSapXepMang").onclick = function () {
  //tạo biến i đầu mảng để lấy điều kiện so sánh với biến tiếp theo. I chỉ chạy từ vị trí đầu đến vị trí áp cuối trong mảng để so sánh giá trị cuối ở vòng cuối với j
  for (var i = 0; i < listNumber.length - 1; i++) {
    //Duyệt mảng biến kế biến i đầu tiên,khi i tăng 1 thì j cũng tăng để so sánh
    for (var j = i + 1; j < listNumber.length; j++) {
      // điều kiện
      if (listNumber[i] > listNumber[j]) {
        var bienTam = listNumber[i];
        listNumber[i] = listNumber[j];
        listNumber[j] = bienTam;
      }
    }
  }
  xuatKetQua("footer1", listNumber);
}
// <------------BÀI 8: Tìm số nguyên tố đầu tiên trong mảng.Nếu mảng k có số nguyên tố thì trả về -1----------->
// -1,3,2,5,8
//  0,1,2,3,4
//Hàm giá trị
getEle("btnsoNT").onclick = function () {
  var soNT = -1;
  for (var j = 0; j < listNumber.length; j++) {
    var ktraSNT = checkSNT(listNumber[j]);
    if (ktraSNT) {
      soNT = listNumber[j];
      break;
    }
  }
  xuatKetQua("footer1", soNT);
}
//Hàm ktra phải số nguyên tố k:
function checkSNT(number) {
  if (number <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
// <------------BÀI 9: Nhập 1 mảng số thực, tìm trong mảng có bao nhiêu số nguyên----------->
/*
  B1: tạo biến đếm số nguyên dem = 0;
  B2: ktra số đó phải số nguyên k? if(i % 2 != 0) => false
  B3: nếu đúng số nguyên thì tích vào biến đếm
  B4: show kết quả
  -2.4, 3, 4 ,2.5
    0 , 1 ,2 , 3
*/
getEle("btnDemSoNguyen").onclick = function () {
  var dem = 0;
  for (var j = 0; j < listNumber.length; j++) {
    var ktraSN = checkSN(listNumber[j]);
    if (ktraSN) {
      dem += 1;
    }
  }
  xuatKetQua("footer1", dem);
}

//Hàm ktra số nguyên
function checkSN(number) {
  if (number % 2 != 0) {
    return false;
  }
  return true;
}
// <------------BÀI 10: so sánh số lượng số dương và số lượng số âm trong mảng----------->
/*
  B1: Đếm số âm, đếm số dương
  B2: đem đi so sánh
  B3: show kết quả
  -2,3,-7,-6,-8,10,12,-19
*/
getEle("btSoSanh").onclick = function () {
  var demSoDuong = 0;
  var demSoAm = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      demSoDuong += 1;
    } else if (listNumber[i] < 0) {
      demSoAm += 1;
    }
  }
  if(demSoDuong > demSoAm) {
    getEle("footer1").innerHTML = "Vậy tổng các số dương: " + demSoDuong + " > " + "Tổng các số âm: " + demSoAm;
  } else {
    getEle("footer1").innerHTML = "Vậy tổng các số dương: " + demSoAm + " > " + "Tổng các số âm: " + demSoDuong;
  }
}


