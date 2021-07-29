module.exports = {
    posts :[
        {
            id:"efhgi54fgdf",
            nomeCompleto:"João Costa",
            telefone:"(222)222-222",
            email:"costav1402@gmail.com",
            endereco:"Rua Guirareia, 389, Irajá- Rio De Janeiro"
        },
    ],
    getAll(){
        return this.posts;
    },
    newPost(nomeCompleto, telefone, email, endereco){
        this.posts.push({id:generateID(), nomeCompleto, telefone, email, endereco});
    }
}
function generateID(){
    return Math.random().toString(36).substr(2,9);
}