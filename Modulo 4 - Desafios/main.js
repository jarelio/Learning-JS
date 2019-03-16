//Desafio 1

// function checaIdade(idade) {
//     return new Promise(function(resolve, reject){
//         if(idade>=18){
//             resolve();
//         }else{
//             reject();
//         }
//     });
// }
//    checaIdade(19)
//     .then(function() {
//     console.log("Maior que 18");
//     })
//     .catch(function() {
//     console.log("Menor que 18");
// });

//Desafio 2


// function adicionar(){
//     var textLink = document.querySelector("input");
//     axios.get('https://api.github.com/users/'+textLink.value+'/repos')
//         .then(function(response){
//             createList(response.data)
//         })
//         .catch(function(error){
//             console.log(error);
//             alert("Usuário não existe ou o servidor não respondeu");
//         });
// }

// function createList(list){
//     var ulLink = document.querySelector("ul");
//     ulLink.innerHTML = ' ';
//     var nomes = list.map(el => el.name);
//     console.log(nomes);
//     nomes.forEach(el => {
//         var repo = document.createElement('li');
//         var text = document.createTextNode(el);
//         repo.appendChild(text);
//         ulLink.appendChild(repo);
//     });
// }


//Desafio 3

//Desafio 4