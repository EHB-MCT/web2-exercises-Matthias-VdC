"use strict";


window.onload = () => {
    let dishes = [];
    dishes.push({
        id: '1',
        name: 'Burger and french fries',
        price: 18
    }, {
        id: '2',
        name: 'Caviar',
        price: 99
    }, {
        id: '3',
        name: 'Clam soup',
        price: 14
    }, {
        id: '4',
        name: 'Fish & Chips',
        price: 11
    }, {
        id: '5',
        name: 'Caesar Salad',
        price: 13
    });

    function orderText(name, email, order) {
        return `The order for the customer <b>${name}</b>  is the following:  <b>${order}</b>. The customer may be notified by email:  <b>${email}</b>`
    }

    for (let dish of dishes) {
        document.getElementById("order").insertAdjacentHTML("afterend",
            `
        <input type="checkbox" name="orderForm" value="${dish.name}" id="${dish.id}"></input>
        <label for="${dish.id}">${dish.name}</label>
        `)
    }

    let order = {};
    let orderInput = [];

    let form = document.getElementById("form").addEventListener("submit", e => {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        console.log(orderInput);

        order = {
            "name": name,
            "email": email,
            "order": orderInput[0]
        };

        // function calculatePrice(checkboxName) {
        //     let checkboxes = document.querySelector('input[id="' + checkboxName + '"]:checked'),
        //         values = [];

        //     dishes.forEach((e) => {
        //         values.push(e.value);
        //         console.log(checkboxes);
        //     })
        //     return values;
        // }

        orderInput.push(document.querySelectorAll('input[name="orderForm"]:checked'));

        // function getCheckedCheckboxesFor(checkboxName) {
        //     var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), values = [];
        //     Array.prototype.forEach.call(checkboxes, function(el) {
        //         values.push(el.value);
        //     });
        //     return values;
        // }

        console.log(orderInput);
        console.log(orderInput[0].length);

        let text = document.getElementById("text").innerHTML =
            printOrder();
    });

    function printOrder(orderdetails) {
        return `The order for the customer <b>${order.name}</b>  is the following:  <b>${order.order}  $ </b>. The customer may be notified by email:  <b>${order.email}</b>`
    }
}