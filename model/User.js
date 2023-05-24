const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  cpf: {
    type: String
  },
  nome: {
    type: String
  },
  sobrenome: {
    type: String
  },
  email:{
    type: String
  },
  senha:{
    type: String
  },
  endereco:{                  //criando um campo de sub-documento, terá todos os dados do endereço sem criar uma collection (tabela) para isso.
    cidade: String,           // no caso do cliente não é uma lista
    cep: String,
    bairro: String,
    logradouro: String,
    numero: String,
    complemento:{
      type: String,
      default: null
    },
  }
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);