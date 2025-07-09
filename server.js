const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/:room', (req, res) => {
    res.send(`<h2>مرحباً بك في ${req.params.room}</h2><p><a href="/">الرجوع</a></p>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
});