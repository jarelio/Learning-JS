// 3º Exercício - Arrow Functions

// 3.1
const arr = [1, 2, 3, 4, 5];

arr.map(function(item) {
 return item + 10;
});

//Resposta 3.1
arr.map(item => item +10);

// 3.2
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);

//Resposta 3.2
const mostraIdade = (usuario) => usuario.idade;

// 3.3
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);

//Resposta 3.3
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
    })
}

//Resposta 3.4
const promise = () => new Promise((resolve,reject) => resolve());