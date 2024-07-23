let billAmount = '';
let tipPercentage = 0;

function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    billAmount = '';
    tipPercentage = 0;
    document.getElementById('result').classList.add('hidden');
}

function setTipPercentage(percentage) {
    tipPercentage = percentage;
    const display = document.getElementById('display');
    display.value = `${display.value.split(' ')[0]} (${percentage}%)`;
}

function calculateTip() {
    const display = document.getElementById('display').value;
    const amount = display.split(' ')[0];
    billAmount = parseFloat(amount);

    if (isNaN(billAmount) || tipPercentage === 0) {
        alert('Por favor, insira um valor válido e selecione uma porcentagem da gorjeta.');
        return;
    }

    const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
    const totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);

    document.getElementById('tip-amount').innerText = tipAmount;
    document.getElementById('total-amount').innerText = totalAmount;

    document.getElementById('result').classList.remove('hidden');
}
