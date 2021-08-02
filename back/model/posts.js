module.exports = {
    posts :[
        {
            id:"efhgi54fgdf",
            nomeCompleto:"Aberto Rocha",
            telefone:"(21)9 9999-9999",
            email:"AbertoR@gmail.com",
            endereco:"Rua Guiratim, 55, São Cristovão- Rio De Janeiro"
        },
    ],
    getAll(){
        return this.posts;
    },
    newPost(nomeCompleto, telefone, email, endereco){
        this.posts.push({id:generateID(), nomeCompleto, telefone, email, endereco});
    },
    updatePost(id,nomeCompleto, telefone, email, endereco){
        this.posts.push({id:generateID(), nomeCompleto, telefone, email, endereco});
    },
}
function generateID(){
    return Math.random().toString(36).substr(2,9);
}