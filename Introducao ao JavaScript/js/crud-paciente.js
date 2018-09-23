var tabela = document.querySelector("#tabela-pacientes");

/**
 * Remove uma pessoa da tabela
 */
tabela.addEventListener('dblclick', (e) => {
    let TR = e.target.parentNode;
    TR.classList.add('fadeout');
    setTimeout(() => {
        TR.remove();
    }, 500);
});

/**
 * Copia a linha (pessoa) clicada para a tabela
 */
tabela.addEventListener('click', (e) => {
    let tdNome = e.path[0].className;
    if(tdNome === 'info-nome'){
        let TR = e.target.parentNode;

        let form = document.querySelector("#form-add");

        var pessoa = capturaPessoa(TR);

        gerarPessoa(pessoa.nome, pessoa.peso, pessoa.altura, pessoa.gordura);

    }

    form.reset();
    form.nome.focus();

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

    return getDadosPessoa(nome, peso, altura, gordura);
}

/*
var pacientes = document.querySelectorAll(".paciente");

document.querySelector('#tabela')
        .forEach((paciente) => {
            paciente.addEventListener('dblclick', (e) => {

    });
});*/