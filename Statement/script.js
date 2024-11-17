var response = {
    code: 200,
    result: [
      {
        id: 1,
        type: "PAYMENT",
        title: "ข้าวกะเพราะหมูกรอบ",
        amount: 55,
        doingtime: "2024-07-12 12:50:31",
        slip:
          "https://images.unsplash.com/photo-1687791301950-972428a58aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
      },
      {
        id: 2,
        type: "TOPUP",
        title: "รายรับ",
        amount: 2000,
        doingtime: "2024-07-13 09:10:53",
        slip:
          "https://images.unsplash.com/photo-1687791301950-972428a58aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
      },
      {
        id: 3,
        type: "PAYMENT",
        title: "ข้าวกะเพราทะเล",
        amount: 50,
        doingtime: "2024-07-13 12:10:53",
        slip:
          "https://images.unsplash.com/photo-1687791301950-972428a58aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
      }
    ]
  };
  
  $(document).ready(() => {
    var amount = {
      remaining: 14210,
      income: 16000,
      outcome: 3050
    };
  
    $("#txt_remaining").text(numberWithCommas(amount.remaining));
    $("#txt_income").text(numberWithCommas(amount.income));
    $("#txt_outcome").text(numberWithCommas(amount.outcome));
  
    if (response.code == 200) {
      render("");
    }
  });
  
  function render(search) {
    console.log("search", search);
    var html = "";
    for (let i = 0; i < response.result.length; i++) {
      const element = response.result[i];
  
      if (String(element.type).includes(search)) {
        var obj = {};
        if (element.type == "PAYMENT") {
          obj.icon = `<i class="fa-solid fa-basket-shopping" style="font-size: 30px;"></i>`;
          obj.amount = `<p class="text-danger" style="font-size: 14px;">-${numberWithCommas(
            element.amount
          )} บาท</p>`;
        } else {
          obj.icon = `<i class="fa-solid fa-money-bill-wave" style="font-size: 30px;"></i>`;
          obj.amount = `<p class="text-success" style="font-size: 14px;">+${numberWithCommas(
            element.amount
          )} บาท</p>`;
        }
  
        console.log(obj);
  
        html += `
                      <div onclick="taptap(this)" id="statement${i}" class="statement ${element.type}">
                          <div style="display: flex; align-items: center;">
                              ${obj.icon}
                              <div style="margin-left: 15px;">
                                  <p style="font-size: 12px;">${element.title}</p>
                                  ${obj.amount}
                                  <p class="text-gray" style="font-size: 10px;">${element.doingtime}</p>
                              </div>
                          </div>
                          <div id="statement${i}_slip" style="display: none;">
                              <div style="margin-top: 10px; display: flex; justify-content: center;">
                                  <img src="${element.slip}" 
                                  style="width: 80%; object-fit: contain; border-radius: 10px;">
                              </div>
                          </div>
                      </div>
                      `;
      }
    }
    $("#render_statement").html(html);
  }
  
  function taptap(elem) {
    var id = elem.id;
    $(`#${id}_slip`).slideToggle();
  }
  
  function tapsearch(elem, param) {
    $(".tag").removeClass("active");
    var id = elem.id;
    $(`#${id}`).addClass("active");
    render(param);
  }
  
  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }
  