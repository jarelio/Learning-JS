"use strict";

var usuario = {
  nome: 'jarelio',
  idade: '18',
  endereco: {
    rua: 'Rua verde 1',
    cidade: 'Fortaleza'
  }
};

var retornaNome = function retornaNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return console.log(nome, idade);
};

retornaNome(usuario);
