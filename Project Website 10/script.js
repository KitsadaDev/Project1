const box = document.querySelector('.box')
var offset = [0,0]
var isDown = false

box.addEventListener('mousedown', function(e) {
    isDown = true
    box.classList.add('active')
    offset = [
        box.offsetLeft - e.clientX,
        box.offsetTop -e.clientY
    ]
}, true)

document.addEventListener('mouseup', function() {
    isDown = false;
    box.classList.remove('active')
}, true)

document.addEventListener('mousemove', function(e) {
    if (isDown) {
        box.style.left = (e.clientX + offset[0]) + 'px'
        box.style.top = (e.clientY + offset[1]) + 'px'
    }
}, true)

// ฟังก์ชัน ขยับ Box ไปตามที่กำหนด