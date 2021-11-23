const express = require('express');
const app = express();
const fs = require('fs/promises');
const port = 3000;
const bodyParser = require('body-parser');


app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(300).redirect('/index.html');
});

//Return all boardgames from the file
app.get('/boardgames', async (req, res) => {
    //Read the file
    try {
        let data = JSON.parse(await fs.readFile('data/boardgames.json'));
        //Send the file back
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send('File could not be read! Try again later...')
    }
});

//boardgame?id=12345
app.get('/boardgame', async (req, res) => {
    console.log(req.query.id);
    try {
        //Read the file
        let boardgames = await fs.readFile('data/boardgames.json');
        //Make string an object
        boardgames = JSON.parse(boardgames);
        //try to find boardgame with provided id
        let bg = boardgames[req.query.id];

        if (bg) {
            //send back the file
            res.status(200).send(bg);
        } else {
            //send back error
            res.status(200).send("Boardgame could not be found");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('File could not be read! Try again later...');
    }
});

app.post('/saveBoardgame', async (req, res) => {
    console.log(req.body);

    if (!req.body.if || !req.body.name || !req.body.genre || !req.body.mechanisms || !req.body.description) {
        res.status(400).send("Bad request: missing id, name, genre, mechanism or description")
        return
    }

    try {
        //Read the file
        let boardgames = await fs.readFile('data/boardgames.json');
        //Make string an object
        boardgames = JSON.parse(boardgames);

        //disables saving duplicates
        // if(boardgames[req.body.id]){

        // }

        boardgames[req.body.id] = {
            name: req.body.name,
            genre: req.body.genre,
            mechanisms: req.body.mechanisms,
            description: req.body.description
        };

        //save the file
        await fs.writeFile('data/boardgames.json', JSON.stringify(boardgames));

        res.status(201).send(`Boardgame succesfully saved with id ${req.body.id}`);
        return;
    } catch (error) {
        console.log(error);
        res.status(500)
    }

});

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});