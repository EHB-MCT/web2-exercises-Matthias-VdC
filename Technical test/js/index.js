"use strict"


let data;
let randomNumber = Math.floor(Math.random() * 999);

window.onload = function () {
    async function getData(url, _callback) {
        let response = await fetch(url);
        data = await response.json();
        _callback();
        return data;
    }

    getData(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=${randomNumber}`, () => {
        console.log(data[randomNumber]);
        document.getElementById("randomThumb").innerHTML = `<img src="${data[randomNumber].thumb}" alt="${data[randomNumber].title$}">`
        document.getElementById("randomTitle").innerHTML = `<p>Random game: <b>${data[randomNumber].title}</p>`
    });
}