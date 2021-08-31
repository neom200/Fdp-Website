const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080

app.get("/", function(req,res) {
    console.log(`Server running on port ${PORT}`);
    res.status(200);
    res.send("Opa");
});

app.listen(PORT);