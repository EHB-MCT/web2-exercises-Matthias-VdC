import axios from "axios";
import * as fs from "fs/promises";

let response = await axios.get("https://jsonplaceholder.typicode.com/comments");
let emails = {
    count: 0,
    list: []
}
for (let comment of response.data) {
    emails.list.push(comment.emails);
    emails.count++;
}
await fs.appendFile("emails.json", JSON.stringify(emails));

// // Make a request for a user with a given ID
// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//     .then(function (response) {
//         // handle success
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });