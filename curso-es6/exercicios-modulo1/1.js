// 1º Exercicio - Classes ES6

class Usuario{
    constructor(email,senha){
        this.email = email;
        this.senha = senha;
    }
    isAdmin(){
        return this.admin === true;
    }

}

class Admin extends Usuario{
    constructor(email,senha){
        super(email,senha);
        this.admin = true;
    }

}

const novoUser = new Usuario("jarelio", "123");
const novoAdmin = new Admin("jarelio", "123");

console.log(novoUser.isAdmin());
console.log(novoUser.admin); //undefined
console.log(novoAdmin.isAdmin());
console.log(novoAdmin.admin); //true 