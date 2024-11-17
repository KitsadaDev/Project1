// const date = ["ไก่","เป็ด","ปลา"];
// date[3] = "กุ้ง";
// // ใช้อาร์เรย์
// console.log("ลำดับ 0 :",date[0]);
// console.log("ลำดับ 1 :",date[1]);
// console.log("ลำดับ 2 :",date[2]);
// console.log("ลำดับ 3 :",date[3]);

// const result = Array.from("JavaScript");
// // แยกตัวอักษร จากฟังก์ชันfrom
// console.log("ผลการทำงาน :",result)

// let date1 = ["ไก่","เป็ด","ปลา"];
// let date2 = ["หนู","ปู","กุ้ง"];
// let newdate = [...date1,...date2];

// console.log("newdate :",newdate);

const date = [
    { fullname:"Kitsada", salary: 25000 },
    { fullname:"Sripha", salarry: 22000 },
    { fullname:"Kan", salary: 30000 },
    { fullname:"001", salary: 25000 }
]
const result = date.filter((item) => {
    return item.salary >= 25000;
});
console.log(result);