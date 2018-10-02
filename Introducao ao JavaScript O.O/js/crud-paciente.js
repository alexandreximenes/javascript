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
    e.preventDefault();
    let tdNome = e.path[0].className;
    console.log(tdNome);
    let TR = e.target.parentNode;
    if(tdNome === 'info-nome'){

        var pessoa = capturaPessoa(TR);

        var paciente = getPaciente(pessoa.nome, pessoa.data, pessoa.peso, pessoa.altura, pessoa.gordura);

        adicionarPacienteNaTabela(paciente);
    }

    form.reset();
    form.nome.focus();

});

let body = document.querySelector("body");
body.addEventListener('click', (e) => {
    //console.clear();
    // console.log(e.screenX);
    // console.log(e.screenY);
    console.log(e.target.parentNode);
    insereDadosNoFormulario(e.target.parentNode);
});

tabela.addEventListener('mouseover', (e) => {
    let TR = e.target.parentNode;
    // console.log(TR);
    insereDadosNoFormulario(TR);
});

function insereDadosNoFormulario(TR){
    let form = document.querySelector("#form-add");

    var pessoa = capturaPessoa(TR);

    form.nome.value = pessoa.nome;
    form.data.value = pessoa.data;
    form.peso.value = pessoa.peso;
    form.altura.value = pessoa.altura;
    form.gordura.value = pessoa.gordura;

}
function capturaPessoa(TR) {
    let nome = TR.querySelector('.info-nome').textContent;
    let data = TR.querySelector('.info-data-consulta').textContent;
    let peso = TR.querySelector('.info-peso').textContent;
    let altura = TR.querySelector('.info-altura').textContent;
    let gordura = TR.querySelector('.info-gordura').textContent;

    return getPaciente(nome, data, peso, altura, gordura);
}

/*
var pacientes = document.querySelectorAll(".paciente");

document.querySelector('#tabela')
        .forEach((paciente) => {
            paciente.addEventListener('dblclick', (e) => {

    });
});*/