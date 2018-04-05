var table = document.querySelector('table tbody');

table.addEventListener("click", function(event){
	var ul = document.querySelector('#mensagem-erro');
	//ul.innerHTML = "";

	console.log(event.target.parentNode);
	
	var pacienteTarget = event.target.parentNode;
	
	var nome = pacienteTarget.querySelector('.info-nome').textContent;
	var peso = pacienteTarget.querySelector('.info-peso').textContent;
	var altura = pacienteTarget.querySelector('.info-altura').textContent;
	var gordura = pacienteTarget.querySelector('.info-gordura').textContent;

	var form_editar = document.querySelector(".form-cadastro");
	
	form_editar.nome.value = nome;
	form_editar.peso.value = peso;
	form_editar.altura.value = altura;
	form_editar.gordura.value = gordura;


});

table.addEventListener("dblclick", function(event){
	var targetTR = event.target.parentNode;
	var paciente = targetTR.querySelector(".info-nome").textContent;
	
	if(confirm("Deseja excluir paciente "+paciente.toUpperCase()+ " ?")){
			targetTR.classList.add("fadeOut");
			setTimeout(function(){
				targetTR.remove();
			},500);
	}
	

});