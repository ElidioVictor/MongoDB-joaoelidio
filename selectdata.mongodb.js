const database = 'libri-database'
const collection = 'libri-collection'
use('libri-database');

// seleciona todos os dados
use('libri-database');
db['libri-collection'].find();

// seleciona  dados com base em um crietrio de busca
use('libri-database');
db['libri-collection'].find({
    "categoria": "fricção cientifica"
});


// select removendo dados dados a serem visualizados
use('libri-database');
db['libri-collection'].find(
    {},
    {
        "_id":0,
        "codigo":0,
        "imagem":0
    }
    
);

//select usando busca com %(você sabe gang do susto vai te dar um susto)
use('libri-database');
db['libri-collection'].find(
    {
        "descricao": /asimov/i
    }
);

//realizando update de um dado
use('libri-database');
db['libri-collection'].updateOne(
    // selecionando o item
    {titulo: "As Cavernas de Aço" },
    //alterando caracteristicas (é necessário usar o $set)
    {
        $set: {valor: 250}
    }
);

//realizando update de varios dados
use('libri-database');
db['libri-collection'].updateMany(
    {categoria: "Fantasia Heroica" },
    {
        $set: {valor: 1450}
    }
)

// deletando dados *delet ONE*
use('libri-database');
db['libri-collection'].deleteOne(
    {codigo: "8"}

)

//deletando dados *delet MANY*
use('libri-database');
db['libri-collection'].deleteMany(
    {categoria: "Fantasia Heroica"}

)