const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Cardapio = new Schema({
  empresa: {
    type: Schema.Types.ObjectId,        //Passando o id do objeto da empresa tipo uma foreign key
    ref: 'Empresa'                      //referenciando a collection
  },
  nome_produto: {
    type: String
  },
  descricao:{
    type: String
  },
  valor:{
    type: Number,
    get: v => parseFloat(v).toFixed(2),   //Especificando que o campo terá ponto flutuante (float), nesse caso com duas casas decimais
    set: v => parseFloat(v).toFixed(2),
    getters: true
  }
},{
    collection: 'cardapio'
});

module.exports = mongoose.model('Cardapio', Cardapio);