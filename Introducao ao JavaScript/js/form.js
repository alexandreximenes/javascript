let form = document.querySelector("#form-add");
let ul = document.querySelector(".ul");

function validaPaciente(pessoa){
    let erros = [];
    pessoa.nome == "" || pessoa.length <= 2 ? erros.push('Nome invalido!') : '';
    pessoa.peso == "" || (pessoa.peso <= 0 || pessoa.peso > 1000) ? erros.push('Peso invalido!') :'';
    pessoa.altura == ""  || (pessoa.altura <=0 || pessoa.altura >= 4.0)? erros.push('Altura invalida!'):'';
    pessoa.gordura == ""  || pessoa.gordura < 0 || pessoa.gordura > pessoa.peso ? erros.push('Gordura invalida!') : '';
    // console.log(pessoa);
    return erros;
}
function getPaciente(form){

    let pessoa = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : (form.peso.value / (form.altura.value * form.altura.value)).toFixed(2) //this.peso / (this.altura * this.altura)).toFixed(2)
    };
    return pessoa;
}

function getPaciente(nome, peso, altura, gordura){

    let pessoa = {
        nome : nome,
        peso : peso,
        altura : altura,
        gordura : gordura,
        imc : (peso / (altura * altura)).toFixed(2) //this.peso / (this.altura * this.altura)).toFixed(2)
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
        var paciente = getPaciente(form);
        var gerou = adicionarPacienteNaTabela(paciente);
        if(gerou){
            form.reset();
            form.nome.focus();
        }
    });

function adicionarPacienteNaTabela(paciente){
    //let pessoa = getPaciente(paciente.nome, paciente.peso, paciente.altura, paciente.gordura);
    if(paciente != null){
        let erros = validaPaciente(paciente);
        if(erros.length > 0) {
            console.log(erros);
            cria_li(erros);
            return false;
        }else{
            criaTr(paciente);
            ul.innerHTML = '';
            ul.classList.remove('erros');

            //using template string
            console.log(`${paciente.nome} tem ${paciente.altura}mt de altura e ${paciente.peso}Kg, com gordura de ${paciente.gordura}, totalizando IMC de : ${paciente.imc}`);
            return true;
        }
    }

}

function cria_li(erros){
    ul.classList.remove('fadeout');
    ul.innerHTML = '';
    ul.classList.add('erros');
    erros.forEach(erro => {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
    setTimeout(() => {
        ul.classList.add('fadeout');
    }, 4000);
}
function criaTr(pessoa){
    /**
     * Cria um TR
     * @type {HTMLTableRowElement}
     */
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    /**
     * Cria varias colunas TD para colocar dentro da TR
     * @see pacienteTr
     * @type {HTMLTableDataCellElement}
     */

    function montarTD(clazz, conteudo) {
        let td = document.createElement("td");
        td.classList.add(clazz);
        td.textContent = conteudo;
        return td;
    }

    let nomeTd = montarTD('info-nome', pessoa.nome);//document.createElement("td");
    let pesoTd = montarTD('info-peso', pessoa.peso);//document.createElement("td");
    let alturaTd = montarTD('info-altura', pessoa.altura);//document.createElement("td");
    let gorduraTd = montarTD('info-gordura', pessoa.gordura);//document.createElement("td");
    let imcTd = montarTD('info-imc', pessoa.imc);//document.createElement("td");


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

