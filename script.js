

const calculateTotal = (bill, tip) =>{
    bill = document.getElementById('bill').value;
    tip = document.getElementById('tip').value;
    const tipPercentage = tip/100;
    const total = bill*(1 + tipPercentage);
    billTotal = Math.floor(total);
    document.getElementById('total').innerHTML = `Total: ${billTotal}`
};

