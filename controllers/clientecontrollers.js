var path = require('path')

const controller = {}

//Banco de dados JSON

var lista = [
        {
        "id": 1,
        "descricao": "Camiseta",
        "preco": 29.99,
        "cores": ["preto", "branco", "cinza"]
        },
        {
        "id": 2,
        "descricao": "Calça Jeans",
        "preco": 79.99,
        "cores": ["azul claro", "azul escuro"]
        },
        {
        "id": 3,
        "descricao": "Tênis Esportivo",
        "preco": 149.99,
        "cores": ["preto", "branco", "cinza", "azul"]
        },
        {
        "id": 4,
        "descricao": "Jaqueta de Couro",
        "preco": 99.99,
        "cores": ["preto", "marrom"]
        }
    ]


// Inicio dos Serviços Web

//Retorna todos os dados do conjunto em formato JSON. 
controller.getAll = (req,res)=>{
    res.status(200).send(lista)
}

//Retorna os dados do conjunto correspondentes ao ID informado em formato JSON. 
controller.getbyID = (req,res)=>{
    item = lista.find(i => i.id == req.params.id)
    
    if(item){
        res.status(200).send(item)
    } 
    else{
        res.status(404).sendFile(path.resolve(__dirname+"/../views/notfound.html"))
    }
}

//Adiciona um novo dado ao conjunto
controller.create = (req, res)=>{
    lista.push(req.body)
    res.status(200).redirect("/")
}

//Atualiza os dados do conjunto correspondentes ao ID informado. 

controller.update = (req,res)=>{
    console.log(req.body)
    lista[req.params.id-1] = req.body
    res.status(200).send("OK")
}

// Remove os dados do conjunto correspondentes ao ID informado.
controller.delete = (req,res)=>{
    lista.splice(req.params.id-1,1)
    req.status(200).send("Ok")
}

module.exports = controller
