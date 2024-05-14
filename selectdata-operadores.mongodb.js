const database = 'libri-database'

const collection = 'libri-collection';

use('libri-database');

//selecionando livros com valor maior que 100
use('libri-database');
db['libri-collection'].find({valor:{$gt: 100}});

//selecionando livros com valor menor que 100
use('libri-database');
db['libri-collection'].find({valor:{$lt: 100}});

//selecionando livros com valor igual ou menor que 100
use('libri-database');
db['libri-collection'].find({valor:{$lte: 100}});

//selecionando livros com valor igual ou maior que 100
use('libri-database');
db['libri-collection'].find({valor:{$gte: 100}});

//criando pesquisa "in range"
use('libri-database');
db['libri-collection'].find({valor:{$gte: 100, $lte: 150}});

//criando pesquisa "in range" com ordenação
use('libri-database');
db['libri-collection'].find({valor:{$gte: 100, $lte: 150}}).sort({valor:1});

//criando pesquisa "in range" com ordenação ao contrario
use('libri-database');
db['libri-collection'].find({valor:{$gte: 100, $lte: 150}}).sort({valor:-1});


//criando pesquisa "in range" com ordenação
use('libri-database');
db['libri-collection'].find({valor:{$gte: 100, $lte: 150}},{"_id": 0 , "codigo": 0 }).sort({valor:1});