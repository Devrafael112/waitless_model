const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Lotacao = new Schema({
  empresa: {
    type: Schema.Types.ObjectId,    //Passando o id do objeto da empresa tipo uma foreign key
    ref: 'Empresa'                  //referenciando a collection
  },
  qtd_lugares: {
    type: Number
  },

  data:{
    type: Date
  }
},{
    collection: 'lotacao'
});

module.exports = mongoose.model('Lotacao', Lotacao);