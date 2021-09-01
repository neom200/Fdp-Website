const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.static('public'));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + '/public/pages/index.html'));
})

const PORT = 8080
app.listen(PORT, () => {
    console.log("Servidor rodando!");
});