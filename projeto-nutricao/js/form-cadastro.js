/*
* @autor Alexandre Ximenes
* Evento do botão adicionar paciente id = adicionar-paciente
*/
var adicionarPaciente = document.querySelector("#adicionar-paciente");
adicionarPaciente.addEventListener("click", function(event){
	event.preventDefault();

	//Le o formulario cadastro de pacientes 	
	var form = document.querySelector('.form-cadastro');

	//Extrai as informações dos inputs do formulario
	var paciente = obterDadosDoFormulario(form);

	//Se os dados não foram preenchidos, não serão incluidos na tabela
	if(!dadosForamPreenchidos(form)){
		alert("Preencha os campos corretamente!");
		return;
	}

	// verifica se houve algum erro na validação do paciente
	var erros = validaPaciente(paciente);
	var ul = document.querySelector("#mensagem-erro");
	ul.innerHTML = "";

	// Se NÂO houver erros, se estiver tudo preenchido corretamente, adiciona na tabela.
	if(erros.length <= 0){
		adicionaPacientesNaTabela(paciente);
		//Formulario em branco novamente com foco no campo nome para novo preenchimento
		form.reset();
		form.nome.focus();
	}else{
		mostraMensagemDeErro(erros);
	}
	
});

/**
Adiciona pacientes na tabela
*/
function adicionaPacientesNaTabela(paciente){

	// Cria uma linha da tabela com as colunas respectivamente do paciente
	var tr = criaTabela(paciente);

	//Obtem a tabela do index.html
	var tabela_paciente = document.querySelector("#tabela-pacientes");
	
	//Adiciona a linha tr com as colunas td e adiciona como filha na tabela #tabela-pacientes
	tabela_paciente.appendChild(tr);
}

function mostraMensagemDeErro(Erros){
	// adiciona os erros encontrados em uma lista ul > li
	var ul = document.querySelector("#mensagem-erro");
	Erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
	return ul;
}
// valida o peso, altura e gordura, altura
function validaPaciente(paciente){

	var PESO_INVALIDO = "Peso é inválido!";
	var ALTURA_INVALIDA = "Altura é inválida!";
	var GORDURA_INVALIDA = "Gordura é inválida!";

	var erros = [];

	if(!pesoValido(paciente.peso)) erros.push(PESO_INVALIDO); 
	if(!alturaValida(paciente.altura)) erros.push(ALTURA_INVALIDA); 
	if(!gorduraValida(paciente.gordura)) erros.push(GORDURA_INVALIDA);

	return erros; 

}

// valida se os dados foram preenchidos
function dadosForamPreenchidos(form) {
	if(form.nome.value != "" && form.peso.value != "" && form.altura.value != "" && form.gordura.value != ""){
		return true;
	}else{
		return false;
	}
}


/* 
* obterDadosDoFormulario(form)
* Cria um objeto paciente
* Extrai as informações dos inputs do formulario
* returna o objeto com os dados
*/
function obterDadosDoFormulario(form){

	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: (calculaImc(form.peso.value, form.altura.value) == "NaN" ? "" : calculaImc(form.peso.value, form.altura.value))
	}

	return paciente;
}


/* 
* criaTabela(paciente)
*/

function criaTabela(paciente){

	//cria uma linha para adicionar na tabela
	var pacienteTr = document.createElement("tr");
	//adiciona classe paciente na pacienteTr
	pacienteTr.classList.add("paciente");

	//cria as colunas para adicionar na tr - (criaTd)
	//adiciona os dados da td linha da tr - pacienteTr.appendChild()
	pacienteTr.appendChild( criaTd(paciente.nome, "info-nome")       );
	pacienteTr.appendChild( criaTd(paciente.peso, "info-peso")       );
	pacienteTr.appendChild( criaTd(paciente.altura, "info-altura")   );
	pacienteTr.appendChild( criaTd(paciente.gordura, "info-gordura") );
	pacienteTr.appendChild( criaTd(paciente.imc, "info-imc")         );

	return pacienteTr;
}

function criaTd(dado, classe){
	//cria Td
	var td = document.createElement("td");
	//insere dado do paciente 
	td.textContent = dado;
	// adiciona classe na td
	td.classList.add(classe);

	return td;
}
