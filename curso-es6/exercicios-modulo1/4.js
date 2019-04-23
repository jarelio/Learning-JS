// 4º Exercício - Desestruturação Simples e em Parâmetros

//4.1 - Desestruturação Simples 
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

const {nome,endereco: {cidade,estado} } = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

//4.2 - Desestruturação em Parâmetros

function mostraInfo({nome,idade}) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }))
