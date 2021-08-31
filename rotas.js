const express = require('express');
const router = express.Router()

router.get('/', (req,res) => {
    res.send("Página principal")
})

router.get('/sobre', (req,res) => {
    res.send("Página de informações acerca da aplicação")
})

router.get('/carnes', (req, res) => {

})

module.exports = router;