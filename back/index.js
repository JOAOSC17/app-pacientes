const PORT= 8000;
const express = require('express');
const path = require('path');
require('dotenv').config();
const apiRoute = require('./routes/api')
const app= express();
app.use('/api', apiRoute);
if(process.env.NODE_ENV != 'development'){
app.use('/', express.static(path.join(__dirname,"front/public")));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, "front/buld/index.html", function(error){
        if (error){
            res.status(500).send(error)
        }
    }))
})}
app.listen(PORT, ()=>{
    console.log("Server running on port", PORT);
})