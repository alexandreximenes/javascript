// * @autor Alexandre Ximenes
var table = document.querySelector('table tbody');

table.addEventListener("click", function(event){
	var ul = document.querySelector('#mensagem-erro');
	//ul.innerHTML = "";
	//console.log(event.target.parentNode);
	
	//ao clicar na td da tabela o evento e mandado para a tabela e produra o alvo do clique
	var pacienteTarget = event.target.parentNode;
	
	//captura os dados da tabela
	var nome = pacienteTarget.querySelector('.info-nome').textContent;
	var peso = pacienteTarget.querySelector('.info-peso').textContent;
	var altura = pacienteTarget.querySelector('.info-altura').textContent;
	var gordura = pacienteTarget.querySelector('.info-gordura').textContent;

	var form_editar = document.querySelector(".form-cadastro");
	
	// ao clicar na linha tabela, é adicionado no formulario
	form_editar.nome.value = nome;
	form_editar.peso.value = peso;
	form_editar.altura.value = altura;
	form_editar.gordura.value = gordura;


});

table.addEventListener("dblclick", function(event){
	var targetTR = event.target.parentNode;
	var paciente = targetTR.querySelector(".info-nome").textContent;
	
	// Se usuario confirmar a exclusão, remove o paciente
	if(confirm("Deseja excluir paciente "+paciente.toUpperCase()+ " ?")){
			targetTR.classList.add("fadeOut");
			setTimeout(function(){
				targetTR.remove();
			},500);
	}
	

});