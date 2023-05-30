let studentList = [];

let student = [];

let studentID;
console.log(studentID);
do {
  do {
    studentID = prompt("Nhap ma sinh vien");
    if (studentID.length == 5 && studentID.startsWith("S") == true) {
      // cho qua nhap cai khac
      break;
    } else {
      // bat nhap lai
      alert("ban da nhap sai vui long nhap lai");
    }
    console.log(studentID);
  } while (true);
  student.push(studentID);

  let studentName;
  do {
    studentName = prompt("Nhap ten sinh vien");
    if (studentName.length >= 6 && studentName.length <= 30) {
      break;
    } else {
      alert("Hay nhap ten sinh vien co  so ky tu tu 6 - 30");
    }
  } while (true);
  student.push(studentName);

  let age;
  do {
    age = prompt("Nhap tuoi sinh vien");
    if (
      !isNaN(age) &&
      Number(age) >= 18 &&
      Number(age) <= 30 &&
      age.length == 2
    ) {
      break;
    } else {
      alert("hay nhap tuoi la so nguyen tu 18-30");
    }
  } while (true);
  student.push(age);
  studentList.push(student);
  let check = confirm("co muon nhap sinh vien tiep theo khong ?");
  if (check) {
    continue;
  } else {
    break;
  }
} while (true);
let rank;
for (let i = 0; i < studentList.length; i++) {
  let avgMark = (studentList[i][3] + studentList[i][4] + studentList[i][5]) / 3;
  studentList[i].push(avgMark);
  if (avgMark < 5) {
    rank = "Yeu";
  }
  studentList[i].push(rank);
}
// sap xep diem
// sap xep chon
for (let i = 0; i < studentList.length - 1; i++) {
  for (let j = i + 1; j < studentList.length; j++) {
    if (studentList[i][6] > studentList[j][6]) {
      let trungGian = studentList[i];
      studentList[i] = studentList[j];
      studentList[j] = trungGian;
    }
  }
}
// cach 2 :
studentList.sort((a, b) => a[6] - b[6]);

// tim ten
let searchName;

searchName = prompt("nhap ten sinh vien muon tim");

let check;
for (let i = 0; i < studentList.length; i++) {
  check = studentList[i][1].includes(searchName);
  if (check) {
    console.log("ket qua tim kiem ----> " + studentList[i]);
  } else {
    continue;
  }
}
if (!check) {
  console.log("khong tim thay sinh vien phu hop");
}
