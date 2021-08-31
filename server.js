const express = require('express');
const cors = require('cors');
const app = express();
const adm = require('./rotas');
const path = require('path');

app.use(cors());
app.use(express.static('public'));

app.use('/adm', adm);
app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

const PORT = 8080
app.listen(PORT, () => {
    console.log("Servidor rodando!");
});