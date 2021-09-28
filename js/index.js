"use strict";

window.onload = () => {
    let order = {}
    let form = document.getElementById("form").addEventListener("submit", e => {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let orderInput = document.getElementById("order").value;

        order = {
            "name": name,
            "email": email,
            "order": orderInput
        };

        function printOrder(orderdetails) {
            return `The order for the customer <b>${order.name}</b>  is the following:  <b>${order.order}</b>. The customer may be notified by email:  <b>${order.email}</b>`
        }

        let text = document.getElementById("text").innerHTML =
            printOrder();
    });

    let dishes = [];
    dishes.push({
        id: '1',
        name: 'Burger and french fries',
        price: '18'
    }, {
        id: '2',
        name: 'Caviar',
        price: '99'
    }, {
        id: '3',
        name: 'Clam soup',
        price: '14'
    });

    console.log(dishes);

    for (let dish of dishes) {
        console.log(dish);
        document.getElementById("order").insertAdjacentHTML("afterend",
            `
        <input type="radio" name="choice" value="${dish.name}" id="${dish.id}"></input>
        <label for="${dish.id}">${dish.name}</label>
        `)
    }
}

function orderText(name, email, order) {
    return `The order for the customer <b>${name}</b>  is the following:  <b>${order}</b>. The customer may be notified by email:  <b>${email}</b>`
}