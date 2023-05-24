const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Reserva = new Schema({
  empresa: {
    type: Schema.Types.ObjectId,    //Passando o id do objeto da empresa tipo uma foreign key
    ref: 'Empresa'                 //referenciando a collection
  },
  user: {
    type: Schema.Types.ObjectId,   //Passando o id do objeto do cliente tipo uma foreign key
    ref: 'User'             
  },
  data_reserva:{
    type: Date
  },
  hora_reserva:{
    type: String
  }
},{
    collection: 'reserva'
});

module.exports = mongoose.model('Reserva', Reserva);