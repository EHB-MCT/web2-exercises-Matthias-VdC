import * as fs from "fs/promises";

//Get data from file
let result = await fs.readFile("boardgames.json");
let data = JSON.parse(result);
//Loop over boardgames
for (let i in data) {
    //makes the filename
    let filename = `${i}.json`;
    //stringify of content of the file
    let bg = JSON.stringify(data[i]);
    //save to file
    await fs.writeFile(filename, bg);
}