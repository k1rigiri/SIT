const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let mass = "Result: username | password | website<BR/>";

app.get("/list", function (req, res) {
  res.send(mass);
});
app.post('/create', (req, res) => {
    console.log('Got body:', req.body);
    mass = mass + req.body.username + " | " + req.body.password  + " | " + req.body.website + ", <BR/>";
    res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
