const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const router =express.Router();
const posts = require('../model/posts');
const post = posts.posts;
const options = {
    origin: "http://192.168.1.65:8000"
}
router.use(cors(options));
router.get("/all", (req,res)=>{
    res.json(JSON.stringify(posts.getAll()));
});
// router.put("/all/:id", (req,res)=>{
//     const id = req.params.id;
//     let nomeCompleto = req.body.nomeCompleto;
//     let telefone = req.body.telefone;
//     let email = req.body.email;
//     let endereco = req.body.endereco;
//     posts.updatePost(id,nomeCompleto, telefone, email, endereco);
//     res.send("Post atualizado com sucesso", id);
// });
function findItem(id){
    return post.find(item=> item.id == id);
}

router.put('/all/:id', bodyParser.json(), (req, res) => {
    let nomeCompleto = req.body.nomeCompleto;
    let item = findItem(req.params.id);
    item = { ...item, nomeCompleto: nomeCompleto};
    return res.json(item);
 });
 router.delete('/all/:id', bodyParser.json(), (req, res) => {
    let item = findItem(req.params.id);
    return res.json(item);
 });
router.get('/all/:id', (req, res) => {
    const item = findItem(req.params.id);
    return res.json(item);
  });
router.post("/new", bodyParser.json() , (req,res)=>{
    let nomeCompleto = req.body.nomeCompleto;
    let telefone = req.body.telefone;
    let email = req.body.email;
    let endereco = req.body.endereco;
    posts.newPost(nomeCompleto, telefone, email, endereco);
    res.send("Post adicionado");
});

module.exports=router;
