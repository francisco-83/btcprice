//https://api.coindesk.com/v1/bpi/currentprice.json
//https://api.binance.com/api/v3/ticker/price

window.onload = function() {
    jalarDatos();
    setInterval(jalarDatos, 10000);
}

function jalarDatos() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(res => res.json())
    .then(data => displayData(data))


function displayData(data) {
    console.log(data);
    var priceDiv = document.getElementById("priceid");
    let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
    price = data.bpi.USD.rate_float
    priceDiv.innerHTML = "= " + USDollar.format(price);
    }

}


