function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText) || 'Error';
    } catch {
        display.innerText = 'Error';
    }
}
