const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Empresa = new Schema({
  cnpj: {
    type: String
  },
  nome: {
    type: String
  },
  senha: {
    type: String
  },
  telefone:{
    type: String
  },
  hora_funcionamento:{
    type: String
  },
  dia_funcionamento:{
    type: String
  },
  capacidade_total:{
    type: Number
  },
  endereco:[{             //criando um campo de sub-documento, terá todos os dados do endereço sem criar uma tabela (collection) para isso.
    cidade: String,       // esse campo na empresa é uma lista, possibilitando que a empresa tenha mais de um enderço, em caso de filiais com endereço diferente
    cep: String,
    bairro: String,
    logradouro: String,
    numero: String,
    complemento:{
      type: String,
      default: null
    },
  }]
},{
    collection: 'empresa'
});

module.exports = mongoose.model('Empresa', Empresa);