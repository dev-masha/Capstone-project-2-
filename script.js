const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }
    
    msg.innerText = "Loading...";
    
    try {
        let url = `https://api.frankfurter.app/latest?amount=${amtVal}&from=GBP&to=PKR`;
        let response = await fetch(url);
        let data = await response.json();
        let finalAmount = data.rates.PKR;
        msg.innerText = `${amtVal} GBP = ${finalAmount.toFixed(2)} PKR`;
    } catch (err) {
        msg.innerText = "Error. Phir se try karo";
    }
});
