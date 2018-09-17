let form = document.querySelector("#form-add");

function getDadosPessoa(form){

    let pessoa = {
        nome : form.nome.value,
        altura : form.altura.value,
        peso : form.peso.value,
        gordura : form.gordura.value
    }
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

        //using template string
        console.log(`${pessoa.nome} tem ${pessoa.altura}mt de altura e ${pessoa.peso} em Kg, com gordura de ${pessoa.gordura}`);

        criaTr(pessoa);

    });

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
    imcTd.textContent = (pessoa.peso / (pessoa.altura * pessoa.altura)).toFixed(2);

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

