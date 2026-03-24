let btn = document.getElementById("button")
btn.addEventListener("click", function () {
    showCurrency()
})

async function showCurrency() {
    let amount = document.getElementById("amount").value
    let to = document.getElementById("to").value
    let from = document.getElementById("from").value

    let url = `https://v6.exchangerate-api.com/v6/6fdb8dc12003d10783d305f3/latest/${from}`;

    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    let rate =  data.conversion_rates[to];

    let result = amount * rate;
    document.getElementById("result").innerText = `
    ${amount} ${from} = ${result.toFixed(2)} ${to}
    `
}


// async function getApi(currency) {

// //   console.log("1 USD = " + data.conversion_rates.INR + " INR");
// }
// fetch("https://v6.exchangerate-api.com/v6/6fdb8dc12003d10783d305f3/latest/USD")
//     .then(res => res.json())
//     .then(data => console.log(data));
