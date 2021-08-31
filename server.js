const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080
const path = require('path')

app.use(cors());
app.use(express.static('public'));

app.get("/", function(req,res) {
    console.log(`Server running on port ${PORT}`);
    res.status(200);
    res.sendFile(path.join(__dirname + '/public/index.html'));
    res.end()
});

app.listen(PORT);