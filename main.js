//https://api.binance.com/api/v3/avgPrice?symbol=BNBBTC
//https://api.coindesk.com/v1/bpi/currentprice.json
//https://api.binance.com/api/v3/ticker/price

window.onload = function() {
    jalarDatos();
    setInterval(jalarDatos, 30000);
}

function jalarDatos() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(res => res.json())
    .then(data => displayData(data))


function displayData(data) {
    console.log(data);
    var priceDiv = document.getElementById("priceid");
    priceDiv.innerHTML = data.bpi.USD.rate_float;
    }

}


