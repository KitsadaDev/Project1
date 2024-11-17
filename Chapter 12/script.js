function showmessage(){
   document.getElementById("output").innerHTML = 'Hellow Javascript!!!';
}

console.log("Hellow Javascript!!!");

var product = 300;
console.log("ข้อมูล :",product);

let date = "JS";
let point = 10;

if(point===10){ // === ตรวจสอบว่าเท่ากันหรือไม่ หรือ ตรวจในฐานะตัวเลขกับตัวเลข หรือ ชนิดข้อมูลด้วย
    let date = "C++";
    console.log("ด้านใน :" + date);
}

console.log("ด้านนอก :" + date);
var ทำงานไม่มีขอบเขต
//let ทำงานแบบมีขอบเขต let จะดีกว่านิยมกว่า

const price = 500; //กำหนดค่าคงที่

console.log("ราคา :",price);