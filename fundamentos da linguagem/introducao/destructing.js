const pessoa = {
    nome: 'alexandre',
    idade: 28,
    endereco:{
        logradouro: 'Rua A',
        numero: 123
    }
}

const { nome: name, idade: age} = pessoa

const { endereco : { logradouro, numero }, cep = 81920650} = pessoa

console.log(logradouro, numero, cep);