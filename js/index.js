"use strict";


window.onload = () => {
    let form = document.getElementById("form").addEventListener("submit", e => {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let order = document.getElementById("order").value;
        let text = document.getElementById("text").innerHTML =
            orderText(name, email, order);
    });
}

function orderText(name, email, order) {
    return `The order for the customer <b>${name}</b>  is the following:  <b>${order}</b>. The customer may be notified by email:  <b>${email}</b>`
}