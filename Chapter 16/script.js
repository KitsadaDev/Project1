const form = document.getElementById("form");
const email = document.getElementById("email");
const pws = document.getElementById("pws");
const pwsagain = document.getElementById("pwsagain");

form,addEventListener("submit", e => {
    e.preventDefault();
    ValidForm();
});

const ValidForm = () => {
    const emaildata = email.value.trim();
    const pwsdata = pws.value.trim();
    const pwsagaindata = pwsagain.value.trim();

    if (emaildata === "") {
        setError(email,"กรุณาป้อน E-mail ด้วย");
        email.focus();
    } else {
        setSuccess(email);
    }

    if (pwsdata === "") {
        setError(pws, "กรุณาป้อน รหัสผ่าน ด้วย!!!");
        pws.focus();
    } else if(pws.length < 12) {
        setError(pws, "รหัสต้องมี 12 ตัวขึ้นไป!!!")
        pws.focus();
    } else {
        setSuccess(pws);
    }

    if(pwsagaindata === "") {
        setError(pwsagain, "กรุณาป้อน รหัสผ่านอีกครั้ง ด้วย!!!");
        pwsagain.focus();
    } else if (pwsagaindata !== pwsdata) {
        setError(pwsagain, "คุณป้อน รหัสผ่าน ไม่เหมือนกัน!!!");
        pwsagain.focus();
    } else {
        setSuccess(pwsagain);
    }
};

const setSuccess = element => {
    const ele = element.parentElement;
    const txt = ele.querySelector(".error");

    txt.innerText = "";
    ele.classList.add("success");
    ele.classList.remove("error");
};

const setError = (element,message) => {
    const ele = element.parentElement;
    const txt = ele.querySelector(".error");

    txt.innerText = message;
    ele.classList.add("error");
    ele.classList.remove("success");
}