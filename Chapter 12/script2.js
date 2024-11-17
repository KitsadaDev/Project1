// const date = { firstname:"AAA",lastname:"BBB"};
// Object.freeze(date); //แช่แข็งค่าคงที่

// date.lastname = "CCC";

// console.log("ข้อมูล :", date);

// function add(x,y){ //สร้างฟังก์ชันชื่อ add มีพาริมิเตอร์ x y สั่งรีเทินค่า x + y 
//     return x + y;
// }

// let result = add(10,20); // สร้างตัวแปรชื่อ result ใช้ฟังก์ชัน add กำหนดค่าลงไป
// console.log(result); // แสดงผลดึงค่าจากตัวแปร result

// const add = (x,y) => x + y;
// เขียนแบบลดรูปให้สั้นลง
// let result = add(200,300);
// console.log(result);

// const add = (x,y) => {return x +y};
// แบบที่2
// let result = add(200,300);
// console.log(result)

// const add = x => x + 1000;
// พารามิเตอร์ตัวเดียว
// let result = add(100);
// console.log(result);

// const Person = (firstname,lastname,age = 0) => {
//     return firstname + " " + lastname + "อายุ :" + age
// }
// //สร้างฟังก์ชันและพารามิดตอร์ ชื่อ สกุล อายุ แล้วรีเทินค่า

// let result1 = Person("Kitsada","Sripha", "20");
// let result2 = Person("Kitsada", "Sripha");
// //กำหนดตัวแปร แล้วดึงค่าจากฟังก์ชัน Person แสดงผ่าน console.log
// console.log(result1);
// console.log(result2);

// const Person = (firstname,lastname,age) => {
//     if(typeof firstname === "undefined"){
//         firstname = "";
//     }
    
//     if(typeof lastname === "undefined"){
//         lastname = "";
//     }
    
//     if(typeof age === "undefined"){
//         age = 0; //เก็บค่า0
//     }
    
//     return firstname + " " + lastname + "อายุ :" + age
// }
// // undefined เก็บค่าว่าง
// let result = Person();
// console.log(result);

// const CalculatePrice = (price,vat = 0.07) => {
//     return price + (price * vat);
// }
// // price ราคาสินค้า
// // vat อัตราภาษี
// let result1 = CalculatePrice(1000,0.1);
// let result2 = CalculatePrice(1000);
// //คำนวณภาษี
// console.log(result1);
// console.log(result2);

// const ShowDate = (firstname,lastname) => {
//     return `คุณ${firstname} ${lastname}`
// }

// let date = ShowDate("Kitsada","Sripha");
// console.log(date);
// const ProcessDate = (num1,num2) => {
//     return `ผลบวก : ${num1 + num2}`
// }

// let result = ProcessDate(100,200);
// console.log(result)

const date = (fullname,...language) => {
    return language.map(l => fullname + "ชอบภาษา  :" + language);
}

console.log(date("Kitsada Sripha","Js","HTML5","CSS"));

// แสดงหน้าเว็บโดย JavaScript
let div = document.createElement("div");
div.textContent = "Hello JavaScript";
div.style.color = "white";
div.style.backgroundColor = "gray";
div.id = "id";

document.body.appendChild(div);