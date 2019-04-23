// 2º Exercício - map, filter, find e operações juntas

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1 - map
const idades = usuarios.map( usuario => usuario.idade);
console.log(idades);

//2.2 - filter
const user = usuarios.filter( usuario => usuario.idade>=18 && usuario.empresa==='Rocketseat')
console.log(user);

//2.3 - find
const usergoogle = usuarios.find( usuario => usuario.empresa==='Google');
console.log(usergoogle);

//2.4 - map and filter
const user50 = usuarios
    .map( usuario => ({...usuario,idade: usuario.idade*2 }))
    .filter( usuario => usuario.idade<=50)
        
console.log(user50);
