"use strict";


window.onload = function () {
    let count = 0;
    async function getData(url) {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        document.getElementById("card-title").innerText = `${data.Title} (${data.Year})`;
        document.getElementById("card-text").innerText = `${data.Plot}`;
        document.getElementById("card-image").innerHTML = `<img src="${data.Poster}" class="card-img" alt="image">`;
        document.getElementById("card-director").innerText = `Director: ${data.Director}`;
        document.getElementById("card-runtime").innerText = `Runtime: ${data.Runtime}`;
        document.getElementById("countButt").addEventListener("click", e => {
            count += parseInt(data.Runtime);
            e.preventDefault();
            document.getElementById("counter").innerText = `Total runtime = ${count}`;
        });
        return data;
    }

    document.getElementById("butt").addEventListener("click", e => {
        e.preventDefault();
        let title = document.getElementById("inputTitle").value;
        getData(`http://www.omdbapi.com/?t=${title}&apikey=597a8371`);
    })

}