// REST

const usuario = {
    nome: 'Jarelio',
    idade: 18,
    empresa: 'UFC'
};

const {nome, ...resto} = usuario;

console.log(nome, resto);

// REST in vectors

const arr = [1,2,3,4];

const [a, b, ...c] = arr;

console.log(a,b,c);

// REST in functions parameters
function soma (...params){
    return params.reduce((total,next) => total+next); 
};
console.log(soma(1,3,4));

const soma = (...params) => params.reduce((total,next) => total+next);
console.log(soma(1,3,4));

// SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario1 = {
    nome: 'Jarelio',
    idade: 18,
    empresa: 'UFC'
}

const usuario2 = {...usuario1, nome: 'Joao'};
console.log(usuario2);
