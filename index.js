const express = require('express');
const app = express();
const fs = require('fs');

const PORT = 3000;

app.use(express.json());

app.get('/home', (req, res) => {
    res.json({Home: 'This is Home Page'});
})

app.get('/movie', (req, res) => {
    res.json({Movie: 'This is Movies Page'})
})

app.get('/cricket', (req, res) => {
    res.json({Cricket: 'This is Cricket Page '})
})

app.get('/update', (req,res) => {
    res.send("Update is a POST request - send the data");
}) 

// Input format - JSON
// {"data" : "......user input "}
app.post('/update', (req,res) => {
    let data = JSON.stringify(req.body);
    fs.writeFile('userInput.txt', data, (err) => {
        if (!err) res.status(200).send(data);
    })
})

app.get('*', (req, res) => {
    res.status(404).send("Page not Found!");
})


app.listen(PORT, () => console.log(`Server on port:${PORT} started.... `) );

