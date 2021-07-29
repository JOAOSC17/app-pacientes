const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const router =express.Router();
const posts = require('../model/posts');
const options = {
    origin: "http://192.168.1.65:8000"
}
router.use(cors(options));
router.get("/all", (req,res)=>{
    res.json(JSON.stringify(posts.getAll()));
});

router.post("/new", bodyParser.json() , (req,res)=>{
    let nomeCompleto = req.body.nomeCompleto;
    let telefone = req.body.telefone;
    let email = req.body.email;
    let endereco = req.body.endereco;
    posts. newPost(nomeCompleto, telefone, email, endereco);
    res.send("Post adicionado");
});

module.exports=router;
