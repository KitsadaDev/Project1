var product = [{
    id: 1,
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Nike',
    price: 7000,
    description: 'Nike Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam aperiam perspiciatis ut cum, magni eius',
    type: 'shoe'
}, {
    id: 2,
    img: 'https://images.unsplash.com/photo-1511746315387-c4a76990fdce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRpZGFzfGVufDB8fDB8fHww',
    name: 'Adidas shirt',
    price: 1500,
    description: 'Adidas shirt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam aperiam perspiciatis ut cum, magni eius',
    type: 'shirt'
}, {
    id: 3,
    img: 'https://images.unsplash.com/photo-1593287073863-c992914cb3e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWRpZGFzfGVufDB8fDB8fHww',
    name: 'Adidas shoe',
    price: 4500,
    description: 'Adidas shoe Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam aperiam perspiciatis ut cum, magni eius',
    type: 'shoe'
}];

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p style="font-size: 1vw;">${product[i].price}</p>
                </div>`;
    }
    $("#productlist").html(html);
})