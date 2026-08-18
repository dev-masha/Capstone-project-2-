const BASE_URL = "https://api.frankfurter.app/latest?from=GBP&to=PKR";
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
    let response = await fetch(BASE_URL);
    let data = await response.json();
    let rate = data.rates.PKR;
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} GBP = ${finalAmount.toFixed(2)} PKR`;
});
