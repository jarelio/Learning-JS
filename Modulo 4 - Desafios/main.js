//Desafio 1

function checaIdade(idade) {
    return new Promise(function(resolve, reject){
        if(idade>=18){
            resolve();
        }else{
            reject();
        }
    });
}
   checaIdade(19)
    .then(function() {
    console.log("Maior que 18");
    })
    .catch(function() {
    console.log("Menor que 18");
});

//Desafio 2
//Desafio 3
//Desafio 4