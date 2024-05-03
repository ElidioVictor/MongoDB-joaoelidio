//define o nome do banco de dados
const database = 'libri-database'

//define o nome da coleção
const collection = 'libri-collection'

//acessa o banco de dados database
use(database);

//seleciona todos os dados
// db['libri-collection'].find();

//seleciona  dados com base em um crietrio de busca
// db['libri-collection'].find({
//     "categoria": "fricção cientifica"
// })


//select removendo dados dados a serem visualizados
// db['libri-collection'].find(
//     {},
//     {
//         "_id":0,
//         "codigo":0,
//         "imagem":0
//     }
    
// )

//select usando busca com %(você sabe gang do susto vai te dar um susto)
db['libri-collection'].find(
    {
        "descricao": /asimov/i
    }
)

