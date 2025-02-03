const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! This is R2D2 speaking! Who are you my lord?'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
