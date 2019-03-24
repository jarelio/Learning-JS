const usuario = {
    nome: 'jarelio',
    idade: '18',
    endereco: {
        rua: 'Rua verde 1',
        cidade: 'Fortaleza'
    },
};

const retornaNome = ({nome, idade}) => console.log(nome,idade);

retornaNome(usuario);