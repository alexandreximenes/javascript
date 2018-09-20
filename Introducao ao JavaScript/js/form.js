let form = document.querySelector("#form-add");
let ul = document.querySelector(".ul");

function validaPaciente(pessoa){
    let erros = [];
    pessoa.nome == "" || pessoa.length <= 2 ? erros.push('Nome invalido!') : '';
    pessoa.peso == "" || (pessoa.peso <= 0 || pessoa.peso > 1000) ? erros.push('Peso invalido!') :'';
    pessoa.altura == ""  || (pessoa.altura <=0 || pessoa.altura >= 4.0)? erros.push('Altura invalida!'):'';
    pessoa.gordura == ""  || pessoa.gordura < 0 || pessoa.gordura > pessoa.peso ? erros.push('Gordura invalida!') : '';
    console.log(pessoa);
    return erros;
}
function getDadosPessoa(form){

    let pessoa = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : (this.peso / (this.altura * this.altura)).toFixed(2)
    };
    return pessoa;
}

document.querySelector('#adicionar-paciente')
    .addEventListener('click', (e) => {
        e.preventDefault();
        /**
         *
         * @type {{nome: *, altura: *, peso: *, gordura: *}}
         */
        let pessoa = getDadosPessoa(form);
        let erros = validaPaciente(pessoa);
        if(erros.length > 0) {
            console.log(erros);
             cria_li(erros);
             return;
        }else{
        criaTr(pessoa);
            ul.innerHTML = '';
            ul.classList.remove('erros');

            //using template string
            console.log(`${pessoa.nome} tem ${pessoa.altura}mt de altura e ${pessoa.peso}Kg, com gordura de ${pessoa.gordura}, totalizando IMC de : ${pessoa.imc}`);
        }

        form.reset();
        form.nome.focus();


    });

function cria_li(erros){
    ul.innerHTML = '';
    ul.classList.add('erros');
    erros.forEach(erro => {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
function criaTr(pessoa){
    /**
     * Cria um TR
     * @type {HTMLTableRowElement}
     */
    let pacienteTr = document.createElement("tr");

    /**
     * Cria varias colunas TD para colocar dentro da TR
     * @see pacienteTr
     * @type {HTMLTableDataCellElement}
     */
    let nomeTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let gorduraTd = document.createElement("td");
    let imcTd = document.createElement("td");

    /**
     * Atribuir dados da pessoa para as TDs
     * @see @param pessoa
     * @type {*}
     */
    nomeTd.textContent = pessoa.nome;
    pesoTd.textContent = pessoa.peso;
    alturaTd.textContent = pessoa.altura;
    gorduraTd.textContent = pessoa.gordura;
    imcTd.textContent = pessoa.imc;

    /**
     * Coloca as TDs criadas dentro da TR criada
     * @see pacienteTr
     * @see nomeTd, pesoTd, alturaTd, gorduraTd, imcTd
     */
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    /**
     * Atribui a tabela da pagina index.html, a TR criada
     * @see <table>tabela-pacientes</table>
     * @type {HTMLTableRowElement}
     */
    let table = document
        .querySelector("#tabela-pacientes")
        .appendChild(pacienteTr);

    return table;
}

