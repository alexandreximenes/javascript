var tabela = document.querySelector("#tabela-pacientes");

/**
 * Remove uma pessoa da tabela
 */
tabela.addEventListener('dblclick', (e) => {
    let TR = e.target.parentNode;
    setTimeout(() => {
        if(confirm('Deseja realmente deletar este paciente ? ')){
            TR.classList.add('fadeout');
            TR.remove();
        }
    }, 500);
});

/**
 * Copia a linha (pessoa) clicada para a tabela
 */
tabela.addEventListener('click', (e) => {
    let tdNome = e.path[0].className;
    console.log(tdNome);
    if(tdNome === 'info-nome'){
        let TR = e.target.parentNode;

        let form = document.querySelector("#form-add");

        var pessoa = capturaPessoa(TR);

        var paciente = getPaciente(pessoa.nome, pessoa.peso, pessoa.altura, pessoa.gordura);
        adicionarPacienteNaTabela(paciente);

    }

    form.reset();
    form.nome.focus();

});

let body = document.querySelector("body");
body.addEventListener('click', (e) => {
    console.clear();
    // console.log(e.screenX);
    // console.log(e.screenY);
    console.log(e.target);
});

tabela.addEventListener('mouseover', (e) => {
    let TR = e.target.parentNode;
    let form = document.querySelector("#form-add");

    var pessoa = capturaPessoa(TR);

    form.nome.value = pessoa.nome;
    form.peso.value = pessoa.peso;
    form.altura.value = pessoa.altura;
    form.gordura.value = pessoa.gordura;

});

function capturaPessoa(TR) {
    let nome = TR.querySelector('.info-nome').textContent;
    let peso = TR.querySelector('.info-peso').textContent;
    let altura = TR.querySelector('.info-altura').textContent;
    let gordura = TR.querySelector('.info-gordura').textContent;

    return getPaciente(nome, peso, altura, gordura);
}

/*
var pacientes = document.querySelectorAll(".paciente");

document.querySelector('#tabela')
        .forEach((paciente) => {
            paciente.addEventListener('dblclick', (e) => {

    });
});*/